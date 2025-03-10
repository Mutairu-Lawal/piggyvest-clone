import { Link } from 'react-router-dom';

import errorImg from '../assets/error-page.svg';

const Error404Page = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-dvh">
      <img src={errorImg} alt="404 error image" width={500} />

      <Link to="/">
        <button
          type="submit"
          className="uppercase bg-[#0d60d8] hover:bg-[#0d4dd8] text-white px-5 py-3 rounded-lg font-extrabold rounded-bl-none w-max"
        >
          Back to home
        </button>
      </Link>
    </main>
  );
};

export default Error404Page;
