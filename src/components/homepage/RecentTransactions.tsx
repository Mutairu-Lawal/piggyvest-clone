import Transactions from '../Transactions';
import { UserProps } from '../../data/users';
import { getSessionStorage } from '../../utils/sessionStorage';

const RecentTransactions = ({
  setShowTransactionHistory,
}: {
  setShowTransactionHistory: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const user: UserProps = getSessionStorage('user');
  const recents = user.transactions.reverse().slice(0, 3);

  return (
    <div className="mt-8">
      <p className="text-sm uppercase font-medium text-gray-700 mb-2">
        recent activities
      </p>

      {user.transactions.length === 0 ? (
        <p className="text-center">You don't have any transactions yet.</p>
      ) : (
        <div className="space-y-2">
          <Transactions transactions={recents} />
          {recents.length === 3 && (
            <p
              className="text-center uppercase text-primary my-4 cursor-pointer"
              onClick={() => setShowTransactionHistory(true)}
            >
              view more activities
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default RecentTransactions;
