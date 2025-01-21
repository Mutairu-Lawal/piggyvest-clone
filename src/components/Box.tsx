import { ReactNode } from 'react';

interface BoxPops {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export const Box = ({ title, subtitle, children }: BoxPops) => {
  return (
    <div className="box max-w-md mx-auto text-black bg-white py-10 px-6 rounded-2xl rounded-bl-none">
      <h2 className="text-[#083e9e] font-bold text-xl md:text-2xl">{title}</h2>
      <h5 className="text-sm font-body text-gray-700 text-center">
        {subtitle}
      </h5>
      {children}
    </div>
  );
};
