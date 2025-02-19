import { NavLink } from 'react-router-dom';

import { ImHome2 } from 'react-icons/im';
import { TbTargetArrow } from 'react-icons/tb';
import { IoIosRocket } from 'react-icons/io';
import { FiUser } from 'react-icons/fi';

const navlinks = [
  {
    text: 'Home',
    url: '/',
    icon: <ImHome2 size={25} />,
  },
  {
    text: 'Savings',
    url: 'savings',
    icon: <TbTargetArrow size={25} />,
  },
  {
    text: 'Invest',
    url: 'invest',
    icon: <IoIosRocket size={25} />,
  },
  {
    text: 'Account',
    url: 'account',
    icon: <FiUser size={25} />,
  },
];

export const NavLinks = () => {
  return (
    <nav className="sticky bottom-0 left-0 w-full bg-white">
      <div className="footer__container grid grid-cols-4">
        {navlinks.map(({ icon, url, text }) => (
          <li key={text} className="border-t pt-2 flex justify-center">
            <NavLink
              to={url}
              className="flex flex-col items-center justify-center border"
            >
              {icon}
              <h2>{text}</h2>
            </NavLink>
          </li>
        ))}
      </div>
    </nav>
  );
};
