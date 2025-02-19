import { FaUserCircle } from 'react-icons/fa';
import { IoPartlySunnyOutline } from 'react-icons/io5';

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div>
        <p className="font-bold text-xl font-plus-jakarta mb-1">Lawal,</p>
        <p className="text-gray-400 text-sm flex items-center gap-2">
          Good morning, wash your hands{' '}
          <span>
            <IoPartlySunnyOutline />
          </span>
        </p>
      </div>
      <div className="userIcon text-primary text-4xl">
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Header;
