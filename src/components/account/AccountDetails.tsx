const AccountDetails = () => {
  const accountDetails = [
    {
      id: 1,
      headingValue: 8390602069,
      heading: 'Flex Number by Sterling',
    },
    {
      id: 2,
      headingValue: 40,
      heading: 'Piggy Points',
    },
    {
      id: 3,
      headingValue: '#mtlaw',
      heading: 'Piggylink ID',
    },
    {
      id: 4,
      headingValue: '#3,000',
      heading: 'Refarral Earnings',
    },
  ];

  return (
    <section className="mt-3 space-y-3">
      {accountDetails.map(({ id, heading, headingValue }) => (
        <div key={id} className="rounded-bl-none border p-3 rounded-xl">
          <p className="font-bold text-lg">{headingValue}</p>
          <p className="font-medium text-xs text-gray-400">{heading}</p>
        </div>
      ))}
    </section>
  );
};

export default AccountDetails;
