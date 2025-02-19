export const GetStarted = () => {
  return (
    <div className="space-y-2 my-3">
      <p className="text-sm uppercase font-normal text-gray-700">
        get started with piggyvest
      </p>
      <div className="box border py-3 px-7 bg-primary text-white flex items-center justify-between rounded-lg">
        <h1 className="font-semibold capitalize text-2xl">get started</h1>
        <div className="img">
          <img
            src="/src/assets/cropped.png"
            alt=""
            className="w-full h-full bg-blue-700 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
