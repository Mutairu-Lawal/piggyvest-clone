import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { UserProps } from '../../data/users';
import { setSessionStorage } from '../../utils/sessionStorage';

type QuickSaveProps = {
  setStateAction: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserProps;
};

const QuickSave = ({ setStateAction, user }: QuickSaveProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const userSchema = z.object({
    amount: z.number().positive(),
    accountType: z.enum(['piggybank']).optional(),
  });

  type UserSchema = z.infer<typeof userSchema>;

  const { register, handleSubmit } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const handleOnSubmit = (data: UserSchema) => {
    const { amount } = data;

    setTimeout(() => {
      const updatedState = { ...user, balance: (user.balance += amount) };
      setSessionStorage('user', updatedState);
      setIsLoading(false);
      setStateAction(false);
    }, 2000);

    setIsLoading(true);
  };

  return (
    <section className="absolute z-10 w-full h-full border top-0 left-0 bg-white  p-4 flex flex-col">
      <div className="flex justify-end items-end mb-4">
        <div
          className="icon cursor-pointer text-4xl"
          onClick={() => {
            setStateAction(false);
          }}
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
              placeholder="Tap here & enter .. (e.g 5000)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="accoutType">Choose a Destination</label>
            <select id="accountType" {...register('accountType')}>
              <option value="piggybank">My PiggyBank - 0.00</option>
            </select>
          </div>
        </div>

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
