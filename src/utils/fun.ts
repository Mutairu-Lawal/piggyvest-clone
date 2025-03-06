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
