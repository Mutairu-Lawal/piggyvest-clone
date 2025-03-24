import { UserProps } from '../data/users';
import { API_KEY } from '../utils/fun';

export const getAllUsers = async () => {
  try {
    const res = await fetch('api', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': API_KEY,
      },
    });

    if (!res.ok) throw new Error(res.statusText);

    const data = await res.json();

    return [...data.record.users];
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return 'Something went wrong!';
  }
};

export const syncData = async (newState: UserProps) => {
  const id = newState.id;

  try {
    const dataRecords: UserProps[] | string = await getAllUsers();

    if (!Array.isArray(dataRecords)) throw new Error(dataRecords);

    const updatedDataRecords = dataRecords.map((user: UserProps) => {
      if (user.id === id) {
        return { ...user, ...newState };
      }
      return user;
    });

    const res = await fetch(
      'https://api.jsonbin.io/v3/b/67c7e315acd3cb34a8f53a7b/',
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': API_KEY,
        },
        body: JSON.stringify({ users: [...updatedDataRecords] }),
      }
    );

    if (!res.ok) {
      throw new Error(res.statusText);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return 'Something went wrong!';
  }
};
