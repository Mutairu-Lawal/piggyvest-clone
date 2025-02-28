import { FiShield } from 'react-icons/fi';

import * as hooks from '../app/hooks';

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
  const showBalance = hooks.useAppSelector(
    (state) => state.showBalance.isVisible
  );
  return (
    <div className="py-2">
      <div
        className={`rounded-xl rounded-bl-none p-6 flex items-center gap-4 ${
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
            {showBalance
              ? balance.toLocaleString('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                })
              : '****'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
