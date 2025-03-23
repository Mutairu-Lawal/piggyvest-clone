import { useAppSelector } from '../../app/hooks';

const Header: React.FC = () => {
  const userData = useAppSelector((state) => state.currentUserData.user);

  return (
    <section className="account-header">
      <h1 className="text-2xl font-bold">My Account</h1>
      <p className="text-gray-500 font-medium mt-1 capitalize">
        {userData?.fullName || 'User'}
      </p>
    </section>
  );
};

export default Header;
