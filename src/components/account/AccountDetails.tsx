import { useAppSelector } from '../../app/hooks';
import { formatCurrency } from '../../utils/fun';

const AccountDetails = () => {
  const userData = useAppSelector((state) => state.currentUserData.user);
  const accountDetails = [
    {
      id: 1,
      headingValue: userData.accountNumber,
      heading: 'Flex Number by Mt Enterprises',
    },
    {
      id: 2,
      headingValue: userData.piggyPoints,
      heading: 'Piggy Points',
    },
    {
      id: 3,
      headingValue: `#${userData.userName}`,
      heading: 'Piggylink ID',
    },
    {
      id: 4,
      headingValue: 3000,
      heading: 'Refarral Earnings',
    },
  ];

  return (
    <section className="mt-3 space-y-3">
      {accountDetails.map(({ id, heading, headingValue }) => (
        <div key={id} className="rounded-bl-none border p-3 rounded-xl">
          {id !== 4 ? (
            <p className="font-bold text-lg">{headingValue}</p>
          ) : (
            <div className="font-bold text-lg">
              <span className="font-sans">₦</span>{' '}
              <span>{formatCurrency(headingValue)}</span>
            </div>
          )}
          <p className="font-medium text-xs text-gray-400">{heading}</p>
        </div>
      ))}
    </section>
  );
};

export default AccountDetails;
