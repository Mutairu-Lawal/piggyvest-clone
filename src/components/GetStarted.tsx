import { ReactNode } from 'react';

interface GetStartedProps {
  title: string;
  children: ReactNode;
  isHome?: boolean;
}

export const GetStarted = ({
  title,
  children,
  isHome = false,
}: GetStartedProps) => {
  return (
    <div className="space-y-2 my-3">
      <p className="text-sm uppercase font-normal text-gray-700">{title}</p>
      <div className="rounded-xl overflow-hidden">
        <div
          className={`border ${
            isHome
              ? 'bg-primary text-white flex items-center justify-between py-3 px-7 rounded-xl'
              : 'h-[120px] bg-blue-800'
          } `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
