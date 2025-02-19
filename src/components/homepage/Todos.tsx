const Todo = ({ type }: { type: string }) => {
  return (
    <div className="brand--radius py-3 px-4 border flex items-center gap-4 rounded-lg">
      <div className="circle w-[30px] h-[30px] border-2 rounded-full border-primary"></div>
      <p>{type}</p>
    </div>
  );
};

export const Todos = () => {
  return (
    <div className="space-y-2 my-3 mt-4">
      <p className="text-sm uppercase">to-do list</p>
      {/* box */}
      <Todo type="Setup automatic savings" />
    </div>
  );
};
