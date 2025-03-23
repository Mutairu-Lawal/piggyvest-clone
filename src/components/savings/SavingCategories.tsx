import { FiShield } from 'react-icons/fi';
import { TbMovie } from 'react-icons/tb';
import { IoLockClosedOutline } from 'react-icons/io5';
import { LuTarget } from 'react-icons/lu';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FiAtSign } from 'react-icons/fi';
import { formatCurrency } from '../../utils/fun';
import { UserProps } from '../../data/users';

const SavingCategories = ({ user }: { user: UserProps }) => {
  const savings = [
    {
      id: '1',
      name: 'Savings',
      description:
        'Strict savings automatically. Daily, weekly or Monthly. 14% p.a',
      balance: user.accounts[0].savings,
      icon: <FiShield />,
      bgColor: '#CCF0FE',
      accentColor: '#0D60D6',
    },

    {
      id: '2',
      name: 'flex Naira',
      description:
        'Flexible savings for emergencies. Free transfer, withdrawals etc. 12% p.a',
      balance: user.accounts[0].flexNaira,
      icon: <TbMovie />,
      bgColor: '#FFEAF6',
      accentColor: '#DA4999',
    },

    {
      id: '3',
      name: 'safelock',
      description:
        'Lock funds to avoid temptations. Upfront interest. up to 20% p.a',
      balance: user.accounts[0].safeLock,
      icon: <IoLockClosedOutline />,
      bgColor: '#F0F8FF',
      accentColor: '#6495ED',
    },

    {
      id: '4',
      name: 'targets',
      description:
        'Reach your unique individual saving goals. \u00A0  up to 12% p.a',
      balance: user.accounts[0].target,
      icon: <LuTarget />,
      bgColor: '#DCFFEB',
      accentColor: '#51B77D',
    },

    {
      id: '5',
      name: 'flex dollar',
      description:
        'Save & grow your wealth in dollars. up to 7% p.a in dollars',
      balance: 0,
      icon: <BsCurrencyDollar />,
      bgColor: '#EFF5F5',
      accentColor: '#000000',
    },

    {
      id: '6',
      name: 'PocketApp ®',
      description: `withdraw your \u00A0 savings to your pocket faster ⚡`,
      balance: 200,
      icon: <FiAtSign />,
      bgColor: '#F1EDFE',
      accentColor: '#7e22c2',
    },
  ];

  return (
    <section className="grid grid-cols-2 justify-between gap-3">
      {savings.map(
        ({ accentColor, bgColor, balance, description, icon, id, name }) => (
          <div
            key={id}
            className="card px-4 py-7 space-y-2"
            style={{
              backgroundColor: bgColor,
              color: accentColor,
            }}
          >
            <div className="icon text-3xl">{icon}</div>
            <p className="capitalize font-bold">{name}</p>
            <p className="text-gray-700 text-xs">{description}</p>

            {/* control the balance display */}

            {user.showBalance ? (
              <p className="font-bold text-sm">
                {id != '5' && id != '6' && (
                  <span className="font-sans font-bold mr-1">₦</span>
                )}
                {id != '5' && id != '6' && formatCurrency(balance)}
                {id === '5' &&
                  balance.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                {id === '6' && <span className="text-sm">Connect Account</span>}
              </p>
            ) : (
              '****'
            )}
          </div>
        )
      )}
    </section>
  );
};

export default SavingCategories;
