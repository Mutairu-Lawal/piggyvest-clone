import { getTotalBalance } from '../utils/fun';
import { getSessionStorage } from '../utils/sessionStorage';

import AccountBalance from '../components/AccountBalance';
import Header from '../components/Header';
import GetStarted from '../components/GetStarted';
import SavingCategories from '../components/savings/SavingCategories';

const Savings = () => {
  // get user from session storage
  const user = getSessionStorage('user');

  return (
    <main className="min-h-screen">
      <Header title="Savings" subtitle={`let's see how well you're doing.`} />
      <AccountBalance title="total balance" balance={getTotalBalance(user)} />
      <GetStarted title="build your savings">
        <img
          src="https://res.cloudinary.com/dymnal33p/image/upload/f_auto,q_auto/v1/piggyvestclone/wesxi8ovgaozasqamctd"
          alt="image of people saving money"
          className="w-full h-full"
        />
      </GetStarted>
      <SavingCategories user={user} />
    </main>
  );
};

export default Savings;
