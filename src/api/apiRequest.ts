import { UserProps } from '../data/users';

export const syncData = async (newState: UserProps) => {
  // const API_KEY = import.meta.env.VITE_SOME_KEY;
  const id = newState.id;

  try {
    const res = await fetch(`api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        // 'X-Master-Key': API_KEY,
      },
      body: JSON.stringify(newState),
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return null;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return 'Something went wrong!';
  }
};
