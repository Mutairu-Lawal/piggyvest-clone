import { FiShield } from 'react-icons/fi';

import { useAppSelector } from '../app/hooks';
import { formatCurrency } from '../utils/fun';
import { UserProps } from '../data/users';

interface AccountBalanceProps {
  title: string;
  balance: number;
  isHome?: boolean;
}

const AccountBalance = ({
  title,
  balance,
  isHome = false,
}: AccountBalanceProps) => {
  const user: UserProps = useAppSelector((state) => state.currentUserData.user);
  return (
    <div className="py-2">
      <div
        className={`rounded-xl rounded-bl-none p-6 flex items-center gap-3 ${
          isHome ? 'bg-primary text-white' : 'border'
        }  `}
      >
        {isHome && (
          <div className="icon">
            <FiShield size={40} strokeWidth={2} />
          </div>
        )}
        <div className="context">
          <p
            className={`capitalize font-bold text-gray-400 ${
              !isHome && 'text-xs font-medium'
            }`}
          >
            {title}
          </p>
          <p
            className={`text-3xl font-extrabold ${!isHome && 'text-blue-900'}`}
          >
            {user.showBalance && (
              <span className="font-sans font-bold mr-1">₦</span>
            )}
            {user.showBalance ? formatCurrency(balance) : '****'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
