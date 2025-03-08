import { Outlet } from 'react-router-dom';
import { NavLinks } from './NavLinks';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSessionStorage } from '../utils/sessionStorage';

const MainLayout = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      if (!getSessionStorage('user')) {
        navigate('/login');
        return;
      }
      setIsLoggedIn(true);
    }, 1000);
  });
  return (
    isloggedIn && (
      <div className="container mx-auto max-w-[700px] border dark:bg-white dark:text-black">
        <Outlet />
        <NavLinks />
      </div>
    )
  );
};

export default MainLayout;
