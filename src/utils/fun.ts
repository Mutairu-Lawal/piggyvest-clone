import { UserProps } from '../data/users';

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
