import { LiaToggleOnSolid, LiaToggleOffSolid } from 'react-icons/lia';
import * as hooks from '../../app/hooks';
import {
  getSessionStorage,
  setSessionStorage,
} from '../../utils/sessionStorage';
import { updateUserState } from '../../app/features/currentUserData';
import { syncData } from '../../api/apiRequest';

const ShowBalance = () => {
  const currentUserData = hooks.useAppSelector(
    (state) => state.currentUserData.user
  );
  const dispatch = hooks.useAppDispatch();

  const handleToggleBalance = async () => {
    const currentState = getSessionStorage('user');

    try {
      if (currentState) {
        const updatedState = {
          ...currentState,
          showBalance: !currentState.showBalance,
        };

        // Update the user on the client
        setSessionStorage('user', updatedState);
        dispatch(updateUserState(updatedState));

        // Sync with server
        const response = await syncData(updatedState);
        if (response) throw new Error(response);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <section className="p-3 my-3 flex justify-between items-center">
      <p>Show Dashboard Balances</p>
      <div className="text-6xl cursor-pointer" onClick={handleToggleBalance}>
        {currentUserData.showBalance ? (
          <LiaToggleOnSolid color="green" />
        ) : (
          <LiaToggleOffSolid />
        )}
      </div>
    </section>
  );
};

export default ShowBalance;
