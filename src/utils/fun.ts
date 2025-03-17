import { UserProps } from '../data/users';
import days from 'dayjs';
import { nanoid } from 'nanoid';
import { customAlphabet } from 'nanoid';

export const generateAccountNumber = () => {
  const date = Date.now();
  const accountNumber = date.toString().slice(-10);
  return accountNumber;
};

export const getTheDayTime = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours <= 11) {
    return 'Good morning, wash your hands 🌻';
  } else if (hours >= 12 && hours <= 16) {
    return 'Good afternoon, stay hydrated! 🥤';
  } else {
    return 'Good evening, Have a great rest of your day 🌆';
  }
};

export const formatCurrency = (amount: number) => {
  return `${amount.toLocaleString()}`;
};

export const getTotalBalance = (user: UserProps) => {
  return user.accounts.reduce((acc, account) => {
    return (
      acc +
      account.savings +
      account.flexNaira +
      account.safeLock +
      account.target
    );
  }, 0);
};

// export const getdays = () => {
//   const now = days().format('DD/MM/YYYY');
//   const id = nanoid();
//   const customNumbers = customAlphabet('1234567890', 30);
//   //
//   console.log(typeof now);
//   console.log(now);
//   console.log(id);
//   console.log(customNumbers());
//   console.log(typeof customNumbers());
// };

export const generatedReceipt = (
  type: string,
  amount: number,
  status: string
) => {
  const transaction_Number = customAlphabet('1234567890', 30);
  const sessionId = customAlphabet('1234567890', 24);

  return {
    id: nanoid(),
    type,
    amount,
    status,
    date: days().format('DD/MM/YYYY'),
    transaction_Number: transaction_Number(),
    sessionId: sessionId(),
  };
};
