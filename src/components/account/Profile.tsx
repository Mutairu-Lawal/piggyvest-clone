import { FaUserCircle } from 'react-icons/fa';

import { useAppSelector } from '../../app/hooks';
import { UserProps } from '../../data/users';

const Profile = () => {
  const userData: UserProps = useAppSelector(
    (state) => state.currentUserData.user
  );

  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <div className="icon">
        <FaUserCircle size={100} color="#083e9e" />
      </div>
      <h1 className="mt-4 font-extrabold text-2xl capitalize">
        {userData.fullName}
      </h1>
    </section>
  );
};

export default Profile;
