import { BsArrowRepeat } from 'react-icons/bs';
import { ToggleStateProps } from '../../types/types';

export const HomeShortcut = ({ setStateAction }: ToggleStateProps) => {
  return (
    <div className="flex justify-between items-center">
      <div
        className="icon font-extrabold text-2xl cursor-pointer"
        onClick={() => {
          window.location.reload();
        }}
      >
        <BsArrowRepeat size={30} strokeWidth={1} />
      </div>
      <div
        className="uppercase text-center text-sm bg-primary text-white py-3 px-6 rounded-bl-none rounded-lg font-bold cursor-pointer"
        onClick={() => setStateAction((prevState) => !prevState)}
      >
        + quick save
      </div>
    </div>
  );
};

export default HomeShortcut;
