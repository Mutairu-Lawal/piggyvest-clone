import { UserProps } from '../data/users';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { nanoid, customAlphabet } from 'nanoid';

/**
 * Generates a 10-digit account number based on current timestamp
 */
export const generateAccountNumber = (): string => {
  const date = Date.now();
  return date.toString().slice(-10);
};

/**
 * Returns a greeting message based on the time of day
 */
export const getTheDayTime = (): string => {
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

/**
 * Formats a number as a currency string
 */
export const formatCurrency = (amount: number): string => {
  return `${amount.toLocaleString('en-NG', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currency: 'NGN',
  })}`;
};

/**
 * Calculates the total balance across all account types for a user
 */
export const getTotalBalance = (user: UserProps): number => {
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

/**
 * Calculates relative time from a given date
 */
export const timeFromNow = (date: string): string => {
  dayjs.extend(relativeTime);
  return dayjs(date).fromNow();
};
/**
 * Generates a receipt object for a transaction
 */
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
    date: dayjs().format(),
    transaction_Number: transaction_Number(),
    sessionId: sessionId(),
  };
};
