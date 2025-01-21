export default function LoginPage() {
  return (
    <section className="bg-[#062863] min-h-dvh text-center py-14 px-5 text-white">
      <div className="font-semibold text-4xl mb-12 flex place-content-center">
        <a href="#" aria-label="click to go to the piggyvest homepage">
          <img
            src="https://dashboard.piggyvest.com/static/media/piggyvest-logo.0b78a8fa.svg"
            alt="piggyvest-logo"
            className="w-full h-full object-contains"
          />
        </a>
      </div>

      <div className="box max-w-md mx-auto text-black bg-white py-10 px-6 rounded-2xl rounded-bl-none">
        <h2 className="text-[#083e9e] font-bold text-xl md:text-2xl">
          Login to your account
        </h2>
        <h5 className="text-sm font-body text-gray-700 text-center">
          Securely login to your PiggyVest
        </h5>

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
          >
            log in
          </button>
        </div>
      </div>

      <a
        href="/register"
        className="hover:text-gray-300 md:text-sm text-xs font-medium"
      >
        <h6 className="mt-10">Don't have an account? Register</h6>
      </a>
      <a
        href="/forgot-password"
        className="hover:text-gray-300 md:text-sm text-xs font-medium"
      >
        <h6 className="mt-5">Forgot Password</h6>
      </a>
    </section>
  );
}
