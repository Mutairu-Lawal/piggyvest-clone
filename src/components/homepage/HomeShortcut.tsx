import { useState } from 'react';
import { BsArrowRepeat } from 'react-icons/bs';
import { useAppDispatch } from '../../app/hooks';
import { toggleQuickSaveState } from '../../app/features/QuickSaveSlice';
import { UserProps } from '../../data/users';
import {
  getSessionStorage,
  setSessionStorage,
} from '../../utils/sessionStorage';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { getAllUsers } from '../../api/apiRequest';
import { updateUserState } from '../../app/features/currentUserData';

export const HomeShortcut = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserDb = async () => {
    try {
      setIsLoading(true);
      const currentUserData: UserProps = getSessionStorage('user');
      const id = currentUserData.id;

      const users: UserProps[] | string = await getAllUsers();
      if (!Array.isArray(users)) throw new Error(users);

      const userData: UserProps | undefined = users.find(
        (user) => user.id === id
      );
      if (!userData) throw new Error('User not found');

      // Update session storage with latest data
      setSessionStorage('user', userData);
      dispatch(updateUserState(userData));

      toast.success('Data updated successfully', {
        position: 'top-right',
        autoClose: 4000,
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
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div
          className={`icon font-extrabold text-2xl cursor-pointer ${
            isLoading ? 'spin' : ''
          }`}
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
