import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { toggleUserNameModal } from '../../app/features/UserNameSlice';
import { UserProps } from '../../data/users';
import {
  getSessionStorage,
  setSessionStorage,
} from '../../utils/sessionStorage';
import { syncData } from '../../api/apiRequest';
import { updateUserState } from '../../app/features/currentUserData';

type UserNameProps = {
  setServerResponse: React.Dispatch<React.SetStateAction<string | null>>;
  setToastModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserName = ({ setToastModal, setServerResponse }: UserNameProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAvailable, setIsAvailable] = useState('');
  const [userName, setUserName] = useState({ userName: '' });
  const dispatch = useAppDispatch();
  const currentUserData = getSessionStorage('user');
  let userNames: string[] | [] = [];

  const fetchAllUserNames = async () => {
    try {
      const res = await fetch('/api/users');

      if (!res.ok) throw new Error(res.statusText);

      const data: UserProps[] = await res.json();
      userNames = [...data.map((user) => user.userName)];
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(''); // clear error message on input change
    setIsAvailable(''); // clear user message on input change
    const { name, value } = e.target;
    setUserName((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validate the username input before sending the request
    if (!userName.userName) return setError(`Username can't be empty`);

    if (
      userNames.find(
        (username) =>
          username.toLocaleLowerCase() === userName.userName.toLocaleLowerCase()
      )
    ) {
      return setError(`${userName.userName} is not available`);
    } else {
      setIsAvailable(`${userName.userName} is available`);
    }

    const updatedData: UserProps = {
      ...currentUserData,
      userName: userName.userName,
    };

    const postData = async () => {
      try {
        setIsLoading(true);
        // update on the server
        const response = await syncData(updatedData);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (response) throw new Error(response);
        setServerResponse('username');
      } catch (error: unknown) {
        if (error instanceof Error) {
          setServerResponse(error.message);
        }
      } finally {
        // show modal
        setToastModal(true);

        // update the user state in the web storage
        setSessionStorage('user', updatedData);
        dispatch(updateUserState(updatedData));
        dispatch(toggleUserNameModal());

        // set state to false
        setIsLoading(false);
      }
    };

    postData();
  };

  // call fetch users
  fetchAllUserNames();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Clean up
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="modal-container sticky z-10 w-full h-screen border top-0 left-0 flex flex-col justify-center items-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="modal-box bg-white w-full max-w-[400px] flex flex-col justify-center">
        <form
          className="form mt-5 text-left space-y-7 bg-white"
          onSubmit={handleSubmit}
        >
          <div className="form-group space-y-2">
            <label
              className="block text-xs text-gray-900 font-semibold"
              htmlFor="userName"
            >
              Enter your Username:
            </label>

            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="e.g Thatblavkgal"
              value={userName.userName}
              onChange={handleChange}
            />
            {error && <p className="text-red-500">{error}</p>}
            {isAvailable && <p className="text-success">{isAvailable}</p>}
          </div>

          <div className="flex justify-between gap-3">
            <button
              type="submit"
              className="uppercase btn border-0 bg-[#0d60d8] hover:bg-[#0d4dd8] text-white w-1/2 py-3 rounded-lg font-extrabold rounded-bl-none"
            >
              {!isLoading && 'Continue'}
              {isLoading && (
                <div className="flex items-center justify-center py-1">
                  <div className="loader"></div>
                </div>
              )}
            </button>
            <div
              className="btn btn-error rounded-bl-none text-white font-bold uppercase"
              onClick={() => dispatch(toggleUserNameModal())}
            >
              cancel
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserName;
