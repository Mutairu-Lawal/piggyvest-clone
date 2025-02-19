import { Outlet } from 'react-router-dom';
import { NavLinks } from './NavLinks';

export const MainLayout = () => {
  return (
    <div>
      <Outlet />
      <NavLinks />
    </div>
  );
};
