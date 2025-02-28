import { LiaToggleOnSolid } from 'react-icons/lia';
import { LiaToggleOffSolid } from 'react-icons/lia';

import * as hooks from '../../app/hooks';
import { toggleState } from '../../app/features/showBalanceSlice';

const ShowBalance = () => {
  const showBalance = hooks.useAppSelector(
    (state) => state.showBalance.isVisible
  );

  const dispatch = hooks.useAppDispatch();

  return (
    <section className="p-3 my-3 flex justify-between items-center">
      <p>Show Dashboard Balances</p>
      <div
        className="text-6xl cursor-pointer"
        onClick={() => {
          dispatch(toggleState());
        }}
      >
        {showBalance ? (
          <LiaToggleOnSolid color="green" />
        ) : (
          <LiaToggleOffSolid />
        )}
      </div>
    </section>
  );
};

export default ShowBalance;
