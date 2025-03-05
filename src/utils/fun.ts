const generateAccountNumber = () => {
  const date = Date.now();
  const accountNumber = date.toString().slice(-10);
  return accountNumber;
};
export default generateAccountNumber;
