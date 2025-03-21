import { BsArrowRepeat } from 'react-icons/bs';
import { useAppDispatch } from '../../app/hooks';
import { toggleQuickSaveState } from '../../app/features/QuickSaveSlice';

export const HomeShortcut = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between items-center">
      <div
        className="icon font-extrabold text-2xl cursor-pointer"
        onClick={() => window.location.reload()}
      >
        <BsArrowRepeat strokeWidth={1} />
      </div>
      <div
        className="uppercase text-center text-sm bg-primary text-white py-3 px-6 rounded-bl-none rounded-lg font-bold cursor-pointer"
        onClick={() => dispatch(toggleQuickSaveState())}
      >
        + quick save
      </div>
    </div>
  );
};

export default HomeShortcut;
