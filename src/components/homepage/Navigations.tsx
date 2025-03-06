import { AiOutlineLike } from 'react-icons/ai';
import { FiAtSign } from 'react-icons/fi';
import { IoIosHeart } from 'react-icons/io';

const Navigations = () => {
  return (
    <div className="mt-6 space-y-3">
      <div className="box rounded-bl-none border py-3 px-4 rounded-lg border-blue-500 flex items-center gap-2 text-blue-500">
        <div className="icon">
          <AiOutlineLike size={40} />
        </div>
        <div className="content text-sm">
          <p className="font-bold">See your recent activities</p>
          <p className="text-gray-400 text-[12px]">
            See your most recent activities on PiggyVest
          </p>
        </div>
      </div>
      <div className="box rounded-bl-none border py-3 px-4 rounded-lg border-purple-700 flex items-center gap-2 text-purple-700">
        <div className="icon">
          <FiAtSign size={40} />
        </div>
        <div className="content text-sm">
          <p className="font-bold">Link your Pocket App</p>
          <p className=" text-[12px] flex items-center gap-2">
            <span className="text-gray-400">
              withdraw from your Piggyvest safer & faster
            </span>
            <span>
              <IoIosHeart />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigations;
