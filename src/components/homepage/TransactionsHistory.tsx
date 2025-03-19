import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

import Transactions from '../Transactions';
import { getSessionStorage } from '../../utils/sessionStorage';

const TransactionsHistory = ({
  setShowTransactionHistory,
}: {
  setShowTransactionHistory: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const currentUser = getSessionStorage('user');
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section className="sticky z-10 w-full h-screen top-0 left-0 bg-white p-4 pb-0 flex flex-col justify-between">
      <div className="sticky top-0">
        <div className="flex justify-end items-end mb-4">
          <div
            className="icon cursor-pointer text-4xl"
            onClick={() => setShowTransactionHistory(false)}
          >
            <IoClose />
          </div>
        </div>

        <h1 className="font-bold text-primary">Recent Activities</h1>
        <p className="text-sm text-gray-400 font-medium pe-3">
          This shows the most recent activities across your piggyvest account
        </p>
      </div>

      <div className=" space-y-3 mt-3 overflow-x-hidden flex-1 overflow-auto pb-5">
        <Transactions transactions={currentUser.transactions.reverse()} />
      </div>
    </section>
  );
};

export default TransactionsHistory;
