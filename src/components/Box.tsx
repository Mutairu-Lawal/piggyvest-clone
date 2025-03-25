import { ReactNode } from 'react';

interface BoxProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

const Box = ({ title, subtitle, children }: BoxProps) => {
  return (
    <div className="box max-w-md mx-auto text-black bg-white py-10 px-5 md:px-10 rounded-2xl rounded-bl-none">
      <p className="text-[#083e9e] font-bold text-xl md:text-2xl">{title}</p>
      <p className="text-sm font-body text-gray-700 text-center">{subtitle}</p>
      <div className="mt-10">{children}</div>
    </div>
  );
};

export default Box;
