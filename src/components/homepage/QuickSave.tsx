import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IoMdArrowDropdown } from 'react-icons/io';

import { UserProps } from '../../data/users';
import {
  getSessionStorage,
  setSessionStorage,
} from '../../utils/sessionStorage';
import { formatCurrency, generatedReceipt } from '../../utils/fun';
import { syncData } from '../../api/apiRequest';
import { useAppDispatch } from '../../app/hooks';
import { updateUserState } from '../../app/features/currentUserData';
import { toggleQuickSaveState } from '../../app/features/QuickSaveSlice';

type QuickSaveProps = {
  setToastModal: React.Dispatch<React.SetStateAction<boolean>>;
  setServerResponse: React.Dispatch<React.SetStateAction<string | null>>;
};

const QuickSave = ({ setToastModal, setServerResponse }: QuickSaveProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const accountTypes = ['savings', 'flexNaira', 'safeLock', 'target'] as const;
  const user = getSessionStorage('user');
  const dispatch = useAppDispatch();

  // schema for form validation
  const userSchema = z.object({
    amount: z.number({ message: '' }).positive(),
    accountType: z.enum(accountTypes).optional(),
  });

  type UserSchema = z.infer<typeof userSchema>;

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  // handle the submission
  const handleOnSubmit = (data: UserSchema) => {
    const { amount, accountType } = data;

    const accountName =
      accountType === 'savings'
        ? 'savings'
        : accountType === 'flexNaira'
        ? 'flexNaira'
        : accountType === 'safeLock'
        ? 'safeLock'
        : 'target';

    const transactionStatus = amount > 100000 ? 'failed' : 'successful';

    setTimeout(async () => {
      // generate the receipt
      const receipt = generatedReceipt(accountName, amount, transactionStatus);

      // update the user new state
      const updatedState: UserProps =
        transactionStatus === 'successful'
          ? {
              ...user,
              accounts: [
                {
                  ...user.accounts[0],
                  [accountName]: (user.accounts[0][accountName] += amount),
                },
              ],
              transactions: [...user.transactions, receipt],
            }
          : {
              ...user,
              transactions: [...user.transactions, receipt],
            };

      try {
        // update on the server
        const response = await syncData(updatedState);

        if (response) throw new Error(response);

        if (transactionStatus === 'failed') {
          throw new Error(
            'Transaction failed! maximum of ₦100,000 per transaction.'
          );
        } else {
          setServerResponse('approved');
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setServerResponse(error.message);
        }
      } finally {
        setToastModal(true);
        // update the user state in the web storage
        setSessionStorage('user', updatedState);
        dispatch(updateUserState(updatedState));
        dispatch(toggleQuickSaveState());

        // set state to false
        setIsLoading(false);
      }
    }, 2000);

    // set loading to true
    setIsLoading(true);
  };

  return (
    <section className="absolute z-10 w-full h-full border top-0 left-0 bg-white p-4 flex flex-col">
      <div className="flex justify-end items-end mb-4">
        <div
          className="icon cursor-pointer text-4xl"
          onClick={() => dispatch(toggleQuickSaveState())}
        >
          <IoClose />
        </div>
      </div>

      <h1 className="font-bold text-primary">Quick Save</h1>
      <p className="text-sm text-gray-400 font-medium">
        Enter an amount and a destination to save to
      </p>

      {/* input form */}
      <form
        onSubmit={handleSubmit(handleOnSubmit)}
        className="mt-12 flex flex-col justify-between pb-5 flex-1"
      >
        <div className="space-y-10">
          <div className="form-group">
            <label htmlFor="amount">Tap here & enter .. (e.g 5000)</label>
            <input
              {...register('amount', { valueAsNumber: true })}
              type="number"
              id="amount"
              className="font-medium"
              placeholder="Tap here & enter ...(e.g 5000)"
            />
            {errors.amount && (
              <p className="text-red-500 text-xs font-sans">
                {errors.amount.message}
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="accountType">Choose a Destination</label>
            <select id="accountType" {...register('accountType')}>
              <option value="savings">
                My PiggyBank - ₦{formatCurrency(user.accounts[0].savings)}
              </option>
              <option value="flexNaira">
                My FlexNaira - ₦{formatCurrency(user.accounts[0].flexNaira)}
              </option>
              <option value="safeLock">
                My SafeLock - ₦{formatCurrency(user.accounts[0].safeLock)}
              </option>
              <option value="target">
                My Target - ₦{formatCurrency(user.accounts[0].target)}
              </option>
            </select>
            <div className="absolute top-[50%] right-[3%] translate-x-[5%] translate-y-[-10%]">
              <IoMdArrowDropdown />
            </div>
          </div>
        </div>
        {/* form submit button */}
        <button
          type="submit"
          className="uppercase bg-[#0d60d8] hover:bg-[#0d4dd8] text-white px-5 py-3 rounded-lg w-full font-extrabold rounded-bl-none"
        >
          {!isLoading && 'proceed'}
          {isLoading && (
            <div className="flex items-center justify-center py-1">
              <div className="loader"></div>
            </div>
          )}
        </button>
      </form>
    </section>
  );
};

export default QuickSave;
