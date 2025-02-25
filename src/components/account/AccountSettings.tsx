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
    },
    {
      icon: <FiUser />,
      heading: 'My Account setting',
    },
    {
      icon: <FiPaperclip />,
      heading: 'Self Help',
    },
    {
      icon: <HiOutlineArchiveBox />,
      heading: 'Update KYC',
    },
    {
      icon: <IoShareSocialOutline />,
      heading: 'Refer & Earn #1,000.00',
    },
    {
      icon: <BsCurrencyDollar />,
      heading: 'withdraw funds',
    },
    {
      icon: <FiCreditCard />,
      heading: 'My Card & Bank Settings',
    },
    {
      icon: <FiBook />,
      heading: 'View PiggyVest Library',
    },

    {
      icon: <IoCallOutline />,
      heading: 'Contact Us',
    },
    {
      icon: <LuLogOut />,
      heading: 'Log Out',
    },
  ];

  return (
    <section className="mt-3 space-y-3">
      {accountSettings.map(({ heading, icon }, index) => (
        <div
          key={index}
          className={`rounded-bl-none border p-4 rounded-xl flex items-center gap-1 ${
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
