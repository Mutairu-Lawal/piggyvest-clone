import { useAppSelector } from '../../app/hooks';
import { formatCurrency } from '../../utils/fun';

const AccountDetails = () => {
  const userData = useAppSelector((state) => state.currentUserData.user);

  return (
    <section className="mt-3 space-y-3">
      <div className="rounded-bl-none border p-3 rounded-xl">
        <p className="font-bold text-lg">{userData.accountNumber}</p>
        <p className="font-medium text-xs text-gray-400">
          Flex Number by Mt Enterprises
        </p>
      </div>

      <div className="rounded-bl-none border p-3 rounded-xl">
        <p className="font-bold text-lg">{userData.piggyPoints}</p>
        <p className="font-medium text-xs text-gray-400">PiggyPoints</p>
      </div>

      {userData.userName && (
        <div className="rounded-bl-none border p-3 rounded-xl">
          <p className="font-bold text-lg">#{userData.userName}</p>
          <p className="font-medium text-xs text-gray-400">Piggylink ID</p>
        </div>
      )}

      <div className="rounded-bl-none border p-3 rounded-xl">
        <div className="font-bold text-lg">
          <span className="font-sans">₦</span>{' '}
          <span>{formatCurrency(userData.referrerPoints)}</span>
        </div>
        <p className="font-medium text-xs text-gray-400">Referral Earnings</p>
      </div>
    </section>
  );
};

export default AccountDetails;
