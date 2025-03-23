import { ReactNode } from 'react';
import { useAppDispatch } from '../app/hooks';
import { toggleQuickSaveState } from '../app/features/QuickSaveSlice';

interface GetStartedProps {
  title: string;
  children: ReactNode;
  isHome?: boolean;
}

const GetStarted = ({ title, children, isHome = false }: GetStartedProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="space-y-2 my-3">
      <p className="text-sm uppercase font-normal text-gray-700">{title}</p>
      <div className="rounded-xl overflow-hidden">
        <div
          onClick={() => {
            if (isHome) return dispatch(toggleQuickSaveState());
          }}
          className={`border ${
            isHome
              ? 'bg-primary text-white flex items-center justify-between py-3 px-4 rounded-xl'
              : 'h-[120px] bg-blue-800'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
