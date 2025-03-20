import { IoWalletSharp } from 'react-icons/io5';
import { BsSafe2, BsShieldLock } from 'react-icons/bs';
import { BiTargetLock } from 'react-icons/bi';

import { formatCurrency, timeFromNow } from '../utils/fun';
import { TransactionProps, UserProps } from '../data/users';
import { useAppSelector } from '../app/hooks';

type TransactionsProps = {
  transactions: TransactionProps[];
};

const Transactions = ({ transactions }: TransactionsProps) => {
  const user: UserProps = useAppSelector((state) => state.currentUserData.user);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'flexNaira':
        return <IoWalletSharp />;
      case 'target':
        return <BiTargetLock />;
      case 'savings':
        return <BsSafe2 />;
      default:
        return <BsShieldLock />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'flexNaira':
        return 'bg-pink-600';
      case 'target':
        return 'bg-green-700';
      case 'savings':
        return 'bg-primary';
      default:
        return 'bg-[#f7dc6f]';
    }
  };

  const getFailedTypeMessage = (type: string) => {
    switch (type) {
      case 'flexNaira':
        return 'Flex account';
      case 'savings':
        return 'Core savings';
      case 'target':
        return 'Target';
      default:
        return 'Safe lock';
    }
  };

  const getTypeDescription = (type: string, status: string) => {
    if (type === 'flexNaira' && status === 'successful') {
      return 'Flex account credited.';
    } else if (type === 'savings' && status === 'successful') {
      return 'Core savings credited.';
    } else if (type === 'target' && status === 'successful') {
      return 'Credited to Target';
    } else if (type === 'safeLock' && status === 'successful') {
      return 'Safe lock credited.';
    } else {
      return `${getFailedTypeMessage(type)} payment failed`;
    }
  };

  return (
    <>
      {transactions.map(({ id, type, amount, date, status }) => (
        <div
          key={id}
          className="box rounded-bl-none border py-3 px-4 rounded-lg grid grid-cols-[60px_1fr] items-center"
        >
          <div
            className={`w-[50px] h-[50px] rounded-[100%] text-white text-lg overflow-hidden flex justify-center items-center ${getTypeColor(
              type
            )}`}
          >
            {getTypeIcon(type)}
          </div>
          <div className="content text-sm w-full">
            <div className="flex justify-between">
              <p className="pe-2">{getTypeDescription(type, status)}</p>
              <p>
                {user.showBalance && (
                  <span
                    className={`font-sans font-medium mr-1 ${
                      status === 'failed' ? 'text-red-600' : ''
                    }`}
                  >
                    ₦
                  </span>
                )}

                {user.showBalance && (
                  <span
                    className={`${status === 'failed' ? 'text-red-600' : ''}`}
                  >
                    {formatCurrency(amount)}
                  </span>
                )}
                {!user.showBalance && '****'}
              </p>
            </div>
            <p className="text-gray-400 text-[12px]">{timeFromNow(date)}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Transactions;
