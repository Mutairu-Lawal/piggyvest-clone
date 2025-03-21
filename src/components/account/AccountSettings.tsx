import { useNavigate } from 'react-router-dom';
import { LuPercent, LuLogOut } from 'react-icons/lu';
import { FiUser, FiPaperclip, FiCreditCard, FiBook } from 'react-icons/fi';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import { IoShareSocialOutline, IoCallOutline } from 'react-icons/io5';
import { BsCurrencyDollar } from 'react-icons/bs';
import { removeSessionStorage } from '../../utils/sessionStorage';
import { formatCurrency } from '../../utils/fun';

const AccountSettings = () => {
  const navigate = useNavigate();

  const accountSettings = [
    {
      icon: <LuPercent />,
      heading: `Today's Rates`,
      url: '#',
    },
    {
      icon: <FiUser />,
      heading: 'My Account Setting',
      url: '#',
    },
    {
      icon: <FiPaperclip />,
      heading: 'Self Help',
      url: '#',
    },
    {
      icon: <HiOutlineArchiveBox />,
      heading: 'Update KYC',
      url: '#',
    },
    {
      icon: <IoShareSocialOutline />,
      heading: `Refer & Earn ${formatCurrency(1000)}.00`,
      url: '#',
    },
    {
      icon: <BsCurrencyDollar />,
      heading: 'Withdraw Funds',
      url: '#',
    },
    {
      icon: <FiCreditCard />,
      heading: 'My Card & Bank Settings',
      url: '#',
    },
    {
      icon: <FiBook />,
      heading: 'View PiggyVest Library',
      url: '#',
    },
    {
      icon: <IoCallOutline />,
      heading: 'Contact Us',
      url: '#',
    },
    {
      icon: <LuLogOut />,
      heading: 'Log Out',
      url: '/login',
    },
  ];

  return (
    <section className="mt-3 space-y-3">
      {accountSettings.map(({ heading, icon, url }, index) => (
        <div
          key={index}
          onClick={() => {
            if (heading === 'Log Out') {
              removeSessionStorage('user');
              return navigate(url);
            }
            alert('Sorry!.. Only Log-out option is available 😉');
          }}
          className={`rounded-bl-none border p-4 cursor-pointer rounded-xl flex items-center gap-1 ${
            heading === 'Log Out' ? 'text-red-700' : ''
          }`}
        >
          <div className="icons text-2xl">{icon}</div>
          <p
            className={`font-medium text-xs ${
              heading === 'Log Out' ? 'text-red-700' : 'text-gray-500'
            }`}
          >
            {heading}
          </p>
        </div>
      ))}
    </section>
  );
};

export default AccountSettings;
