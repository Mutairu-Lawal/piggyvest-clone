import { Outlet } from 'react-router-dom';
import { NavLinks } from './NavLinks';

export const MainLayout = () => {
  return (
    <div className="container mx-auto max-w-[700px] border">
      <Outlet />
      <NavLinks />
    </div>
  );
};
