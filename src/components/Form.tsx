export default function Form() {
  return (
    <div className="form pb-3 px-1 mt-5 text-left space-y-7">
      <div className="form-group space-y-2">
        <label
          className="block text-xs text-gray-900 font-semibold"
          htmlFor="text"
        >
          Email or Phone Number
        </label>
        <input
          className="w-full p-3 md:p-4  bg-gray-200 rounded-md focus:outline-none text-gray-900"
          type="text"
          id="text"
          autoFocus
        />
      </div>

      <div className="form-group space-y-2">
        <label
          className="block text-xs text-gray-900 font-semibold"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="w-full p-3 md:p-4  bg-gray-200 rounded-md focus:outline-none text-gray-900"
          type="password"
          id="passsword"
        />
      </div>

      <button
        type="submit"
        className="uppercase bg-[#0d60d8] hover:bg-[#0d4dd8] text-white px-5 py-3 rounded-lg w-full font-extrabold rounded-bl-none"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        log in
      </button>
    </div>
  );
}
