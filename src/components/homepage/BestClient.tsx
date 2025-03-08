const BestClient = () => {
  return (
    <div className="space-y-2 mt-8">
      <p className="text-sm uppercase font-medium text-gray-700">
        #meetthedeveloper: Mutairu
      </p>
      <div className="rounded-2xl overflow-hidden border max-h-[400px]">
        <img
          src="/src/assets/theDeveloper.webp"
          alt="our best client"
          className="w-full h-full object-left-top"
        />
      </div>
    </div>
  );
};

export default BestClient;
