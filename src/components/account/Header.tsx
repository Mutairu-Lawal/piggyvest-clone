import { useAppSelector } from '../../app/hooks';

const Header = () => {
  const userData = useAppSelector((state) => state.currentUserData.user);
  return (
    <section>
      <h1 className="text-2xl font-bold">My Account</h1>
      <p className="text-gray-500 text-bold mt-1 capitalize">
        {userData.fullName}
      </p>
    </section>
  );
};

export default Header;
