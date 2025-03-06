import { Outlet, useNavigate } from 'react-router-dom';
import NavLinks from './NavLinks';
import { useEffect } from 'react';

import * as hooks from '../app/hooks';

const MainLayout = () => {
  const isLoggedIn = hooks.useAppSelector(
    (state) => state.currentUserData.user
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  });

  return (
    isLoggedIn && (
      <div className="container mx-auto max-w-[700px] border">
        <Outlet />
        <NavLinks />
      </div>
    )
  );
};

export default MainLayout;
