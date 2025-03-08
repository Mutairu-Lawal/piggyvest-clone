import { useState } from 'react';
import { ToggleStateProps } from '../../types/types';

const QuickSave = ({ setStateAction }: ToggleStateProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="absolute z-50 w-full h-full border top-0 left-0 bg-white  p-4 flex flex-col">
      <div className="flex justify-end items-end mb-4 ">
        <div
          className="icon cursor-pointer text-4xl"
          onClick={() => {
            setStateAction((prevState) => !prevState);
          }}
        >
          X
        </div>
      </div>

      <h1 className="font-bold text-primary">Quick Save</h1>
      <p className="text-sm text-gray-400 font-medium">
        Enter an amount and a destination to save to
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setIsLoading(true);
        }}
        className="mt-12 flex flex-col justify-between pb-5 flex-1"
      >
        <div className="space-y-10">
          <div className="form-group">
            <label htmlFor="amount">Tap here & enter .. (e.g 5000)</label>
            <input
              type="number"
              className="font-medium"
              placeholder="Tap here & enter .. (e.g 5000)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Choose a Destination</label>
            <select name="accountType" id="accountType">
              <option value="piggybank">My PiggyBank - 0.00</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="uppercase bg-[#0d60d8] hover:bg-[#0d4dd8] text-white px-5 py-3 rounded-lg w-full font-extrabold rounded-bl-none"
        >
          {!isLoading && 'proceed'}
          {isLoading && (
            <div className="flex items-center justify-center py-1">
              <div className="loader"></div>
            </div>
          )}
        </button>
      </form>
    </section>
  );
};

export default QuickSave;
