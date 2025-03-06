import { FaUserCircle } from 'react-icons/fa';

interface HeaderProps {
  title: string;
  subtitle: string;
  isHome?: boolean;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div>
        <p className="font-bold text-xl font-plus-jakarta mb-1 capitalize">
          {title}
        </p>
        <p className="text-gray-400 text-sm flex items-center gap-2">
          {subtitle}
        </p>
      </div>
      <div className="userIcon text-primary text-4xl">
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Header;
