import { LiaToggleOnSolid } from 'react-icons/lia';
import { LiaToggleOffSolid } from 'react-icons/lia';

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

  return (
    <section className="p-3 my-3 flex justify-between items-center">
      <p>Show Dashboard Balances</p>
      <div
        className="text-6xl cursor-pointer"
        onClick={async () => {
          const currentState = getSessionStorage('user');
          try {
            if (currentState) {
              const updatedState = {
                ...currentState,
                showBalance: !currentState.showBalance,
              };

              const response = await syncData(updatedState);

              if (response) throw new Error(response);

              // update the user on the client
              setSessionStorage('user', updatedState);
              dispatch(updateUserState(updatedState));
            }
          } catch (error: unknown) {
            if (error instanceof Error) {
              console.log(error.message);
            }
          }
        }}
      >
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
