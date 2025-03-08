import { IoWalletSharp } from 'react-icons/io5';

import * as hooks from '../../app/hooks';

const Transactions = () => {
  const user = hooks.useAppSelector((state) => state.currentUserData.user);
  return (
    <div className=" mt-8">
      <p className="text-sm uppercase font-medium text-gray-700 mb-2">
        recent activities
      </p>
      <div className="box rounded-bl-none border py-3 px-4 rounded-lg grid grid-cols-[70px_1fr] items-center">
        <div className="icon w-[50px] h-[50px] rounded-[100%] bg-pink-600 text-white text-lg  overflow-hidden flex justify-center items-center">
          <IoWalletSharp />
        </div>
        <div className="content text-sm w-full">
          <div className="flex justify-between">
            <p className="">flex account credit</p>
            <p>{user.showBalance ? '₦1.50' : '****'}</p>
          </div>
          <p className="text-gray-400 text-[12px]">6 days ago</p>
        </div>
      </div>
      <p className="text-center uppercase text-primary my-4">
        view more activities
      </p>
    </div>
  );
};

export default Transactions;
