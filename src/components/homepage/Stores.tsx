export const Stores = () => {
  return (
    <div className="space-y-2 mt-8">
      <p className="text-sm uppercase font-normal text-gray-700">
        download the mobile app
      </p>
      <div className="stores flex gap-4 justify-between">
        <div className="store">
          <img
            src="/src/assets/app-store.webp"
            alt="app store"
            className="w-full h-full object-contain cursor-pointer"
          />
        </div>
        <div className="store">
          <img
            src="/src/assets/Google_Play_Store_badge_EN.webp"
            alt="google store"
            className="w-full h-full object-contain cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
