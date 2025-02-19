import { BsArrowRepeat } from 'react-icons/bs';

export const HomeShortcut = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="icon font-extrabold text-2xl">
        <BsArrowRepeat size={30} strokeWidth={1} />
      </div>
      <div className="uppercase text-center bg-primary text-white py-3 px-6 brand--radius rounded-lg font-bold">
        + quick save
      </div>
    </div>
  );
};
