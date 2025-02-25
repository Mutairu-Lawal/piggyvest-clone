import { FaUserCircle } from 'react-icons/fa';

const Profile = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-10">
      <div className="icon">
        <FaUserCircle size={100} color="#083e9e" />
      </div>
      <h1 className="mt-4 font-extrabold text-2xl">Lawal Mutairu</h1>
    </section>
  );
};

export default Profile;
