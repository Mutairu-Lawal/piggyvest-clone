import { useState } from 'react';

import { LiaToggleOnSolid } from 'react-icons/lia';
import { LiaToggleOffSolid } from 'react-icons/lia';

const ShowBalance = () => {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <section className="p-3 my-3 flex justify-between items-center">
      <p>Show Dashboard Balances</p>
      <div
        className="text-6xl cursor-pointer"
        onClick={() => {
          setShowBalance((prev) => !prev);
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
