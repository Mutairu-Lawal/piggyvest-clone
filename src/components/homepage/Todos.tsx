import { toggleQuickSaveState } from '../../app/features/QuickSaveSlice';
import { useAppDispatch } from '../../app/hooks';
import { UserProps } from '../../data/users';
import { getSessionStorage } from '../../utils/sessionStorage';

const Todo = ({ type }: { type: string }) => {
  const dispatch = useAppDispatch();

  const Types = {
    FIRST_TRANSACTION: 'Fund your first transaction',
    USERNAME: 'Create your username',
  };

  const handleClick = () => {
    if (type === Types.FIRST_TRANSACTION) {
      return dispatch(toggleQuickSaveState());
    }
    alert(Types.USERNAME);
  };
  return (
    <div
      onClick={handleClick}
      className="rounded-bl-none py-3 px-4 border flex items-center gap-3 rounded-lg cursor-pointer"
    >
      <div className="w-[20px] h-[20px] border-2 rounded-full border-primary"></div>
      <p>{type}</p>
    </div>
  );
};

const Todos = () => {
  const user: UserProps = getSessionStorage('user');
  return (
    <div className="space-y-2 my-3 mt-4">
      <p className="text-sm uppercase">to-do list</p>

      {user.transactions.length === 0 && (
        <Todo type="Fund your first transaction" />
      )}

      {!user.userName && <Todo type="Create your username" />}
    </div>
  );
};

export default Todos;
