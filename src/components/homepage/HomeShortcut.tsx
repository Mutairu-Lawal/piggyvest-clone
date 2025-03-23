import { BsArrowRepeat } from 'react-icons/bs';
import { useAppDispatch } from '../../app/hooks';
import { toggleQuickSaveState } from '../../app/features/QuickSaveSlice';
import { UserProps } from '../../data/users';
import {
  getSessionStorage,
  setSessionStorage,
} from '../../utils/sessionStorage';
import { Bounce, toast, ToastContainer } from 'react-toastify';

export const HomeShortcut = () => {
  const dispatch = useAppDispatch();

  const fetchUserDb = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const currentUserData: UserProps = getSessionStorage('user');

    try {
      const res = await fetch(`api/users/${currentUserData.id}`);
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();

      // Update session storage with latest data
      setSessionStorage('user', data);
      console.log('success');

      toast.success('Data updated successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div
          className="icon font-extrabold text-2xl cursor-pointer"
          onClick={fetchUserDb}
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
      <ToastContainer />
    </>
  );
};

export default HomeShortcut;
