import { useNavigate } from 'react-router-dom';

import { LuPercent } from 'react-icons/lu';
import { FiUser } from 'react-icons/fi';
import { FiPaperclip } from 'react-icons/fi';
import { HiOutlineArchiveBox } from 'react-icons/hi2';
import { IoShareSocialOutline } from 'react-icons/io5';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FiCreditCard } from 'react-icons/fi';
import { FiBook } from 'react-icons/fi';
import { IoCallOutline } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';

const AccountSettings = () => {
  const accountSettings = [
    {
      icon: <LuPercent />,
      heading: `Today's Rates`,
      url: '#',
    },
    {
      icon: <FiUser />,
      heading: 'My Account setting',
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
      heading: 'Refer & Earn #1,000.00',
      url: '#',
    },
    {
      icon: <BsCurrencyDollar />,
      heading: 'withdraw funds',
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

  const navigate = useNavigate();

  return (
    <section className="mt-3 space-y-3">
      {accountSettings.map(({ heading, icon, url }, index) => (
        <div
          key={index}
          onClick={() => {
            navigate(url);
          }}
          className={`rounded-bl-none border p-4 cursor-pointer rounded-xl flex items-center gap-1 ${
            heading === 'Log Out' && 'text-red-700'
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
