const Stores = () => {
  return (
    <div className="space-y-2 mt-8">
      <p className="text-sm uppercase font-normal text-gray-700">
        Download the mobile app
      </p>
      <div className="stores flex gap-4 justify-between">
        <div className="store">
          <img
            src="https://res.cloudinary.com/dymnal33p/image/upload/f_auto,q_auto/v1/piggyvestclone/b2ikxdmll5a9mpwmwrjp"
            alt="App Store"
            className="w-full h-full object-contain cursor-pointer"
          />
        </div>
        <div className="store">
          <img
            src="https://res.cloudinary.com/dymnal33p/image/upload/f_auto,q_auto/v1/piggyvestclone/ohkoovstn7ps5zgah5g1"
            alt="Google Play Store"
            className="w-full h-full object-contain cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Stores;
