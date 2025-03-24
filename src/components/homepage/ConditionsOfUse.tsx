import { useEffect } from 'react';
import { useAppDispatch } from '../../app/hooks';
import {
  getSessionStorage,
  setSessionStorage,
} from '../../utils/sessionStorage';
import { syncData } from '../../api/apiRequest';
import { UserProps } from '../../data/users';
import { updateUserState } from '../../app/features/currentUserData';
import warningImage from '../../assets/3d-warning-sign.png';

const ConditionsOfUse = () => {
  const dispatch = useAppDispatch();

  const clearConditionModal = async () => {
    const currentState: UserProps = getSessionStorage('user');

    try {
      const updatedState = {
        ...currentState,
        userHasSeenConditions: true,
      };

      // Update the user on the client server
      setSessionStorage('user', updatedState);
      dispatch(updateUserState(updatedState));

      // Update the user on the server
      const response = await syncData(updatedState);
      if (response) throw new Error(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';

    // Clean up
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="modal-container absolute z-10 w-full h-screen border top-0 left-0 flex flex-col justify-center items-center bg-black bg-opacity-50 backdrop-blur-md">
      <div className="modal-box bg-white w-full max-w-[400px] flex flex-col justify-center gap-2 items-center p-4 rounded-lg">
        <div>
          <img
            src={warningImage}
            alt="Warning sign"
            className="w-full h-full object-contain"
          />
        </div>

        <h2 className="modal-message text-xl font-extrabold mb-2">
          Important Notice!
        </h2>

        <p className="modal-sub-message font-medium text-center text-gray-700 mb-4">
          This project is a stimulated environment, designed for demonstration
          and practical purposes only. All transactions and activities are
          fictional, and no real monetary funds are involved. Consequently,
          withdrawals are not permitted. We appreciate your cooperation and
          understanding.
        </p>

        <button
          type="button"
          className="uppercase bg-[#0d60d8] hover:bg-[#0d4dd8] text-white px-5 py-3 rounded-lg w-full font-extrabold rounded-bl-none mt-3 transition-colors duration-200"
          onClick={clearConditionModal}
        >
          Okay let's begin!
        </button>
      </div>
    </div>
  );
};

export default ConditionsOfUse;
