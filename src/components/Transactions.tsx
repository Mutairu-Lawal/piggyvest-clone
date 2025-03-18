import { IoWalletSharp } from 'react-icons/io5';
import { BsSafe2 } from 'react-icons/bs';
import { BiTargetLock } from 'react-icons/bi';
import { BsShieldLock } from 'react-icons/bs';

import { formatCurrency } from '../utils/fun';
import { TransactionProps } from '../data/users';
import { useAppSelector } from '../app/hooks';

type TransactionsProps = {
  transactions: TransactionProps[];
};

const Transactions = ({ transactions }: TransactionsProps) => {
  const user = useAppSelector((state) => state.currentUserData.user);
  return (
    <>
      {transactions.map(({ id, type, amount }) => (
        <div
          key={id}
          className="box rounded-bl-none border py-3 px-4 rounded-lg grid grid-cols-[70px_1fr] items-center"
        >
          <div
            className={`w-[50px] h-[50px] rounded-[100%] text-white text-lg  overflow-hidden flex justify-center items-center ${
              type === 'flexNaira'
                ? 'bg-pink-600 '
                : type === 'target'
                ? 'bg-[#87ceeb]'
                : type === 'savings'
                ? 'bg-primary'
                : 'bg-[#f7dc6f]'
            }`}
          >
            {type === 'flexNaira' ? (
              <IoWalletSharp />
            ) : type === 'target' ? (
              <BsSafe2 />
            ) : type === 'savings' ? (
              <BiTargetLock />
            ) : (
              <BsShieldLock />
            )}
          </div>
          <div className="content text-sm w-full">
            <div className="flex justify-between">
              <p>
                {type === 'flexNaira'
                  ? 'Flex account credited.'
                  : type === 'target'
                  ? 'Credited to Target.'
                  : type === 'savings'
                  ? 'Core savings credited.'
                  : 'safe lock credited.'}
              </p>
              <p>
                {user.showBalance && (
                  <span className="font-sans font-medium mr-1">₦</span>
                )}
                {user.showBalance ? formatCurrency(amount) : '****'}
              </p>
            </div>
            <p className="text-gray-400 text-[12px]">6 days ago</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Transactions;
