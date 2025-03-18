import { UserProps } from '../../data/users';
import { getSessionStorage } from '../../utils/sessionStorage';
import Transactions from '../Transactions';

const RecentTransactions = () => {
  const user: UserProps = getSessionStorage('user');
  const recents = user.transactions.reverse().slice(0, 3);

  return (
    <div className=" mt-8">
      <p className="text-sm uppercase font-medium text-gray-700 mb-2">
        recent activities
      </p>

      {user.transactions.length === 0 && (
        <p className="text-center">No Transaction</p>
      )}

      {user.transactions.length !== 0 && (
        <div className="space-y-2">
          <Transactions transactions={recents} />
          {recents.length === 3 && (
            <p className="text-center uppercase text-primary my-4">
              view more activities
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default RecentTransactions;
