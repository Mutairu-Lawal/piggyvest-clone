import { LiaToggleOnSolid } from 'react-icons/lia';
import { LiaToggleOffSolid } from 'react-icons/lia';

import * as hooks from '../../app/hooks';

import {
  getSessionStorage,
  setSessionStorage,
} from '../../utils/sessionStorage';
import { updateUserState } from '../../app/features/currentUserData';

const ShowBalance = () => {
  const userBalance = hooks.useAppSelector(
    (state) => state.currentUserData.user
  );

  const dispatch = hooks.useAppDispatch();

  return (
    <section className="p-3 my-3 flex justify-between items-center">
      <p>Show Dashboard Balances</p>
      <div
        className="text-6xl cursor-pointer"
        onClick={() => {
          const currentState = getSessionStorage('user');

          if (currentState) {
            const updatedState = {
              ...currentState,
              showBalance: !currentState.showBalance,
            };
            setSessionStorage('user', updatedState);
            dispatch(updateUserState(updatedState));
          }
        }}
      >
        {userBalance.showBalance ? (
          <LiaToggleOnSolid color="green" />
        ) : (
          <LiaToggleOffSolid />
        )}
      </div>
    </section>
  );
};

export default ShowBalance;
