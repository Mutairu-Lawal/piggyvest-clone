import { FiShield } from 'react-icons/fi';

const AccountTypes = () => {
  return (
    <div className="py-2">
      <div className="rounded-xl brand--radius bg-primary text-white p-6 flex items-center gap-4">
        <div className="icon">
          <FiShield size={40} strokeWidth={2} />
        </div>
        <div className="context">
          <p className="font-bold text-gray-300">Total Savings</p>
          <p className="text-2xl font-extrabold">₦ 2,170.51</p>
        </div>
      </div>
    </div>
  );
};

export default AccountTypes;
