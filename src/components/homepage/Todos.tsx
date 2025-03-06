const Todo = ({ type }: { type: string }) => {
  return (
    <div className="rounded-bl-none py-3 px-4 border flex items-center gap-3 rounded-lg">
      <div className="w-[20px] h-[20px] border-2 rounded-full border-primary"></div>
      <p>{type}</p>
    </div>
  );
};

const Todos = () => {
  return (
    <div className="space-y-2 my-3 mt-4">
      <p className="text-sm uppercase">to-do list</p>
      {/* box */}
      <Todo type="Setup automatic savings" />
    </div>
  );
};

export default Todos;
