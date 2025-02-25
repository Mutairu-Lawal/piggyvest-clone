import AccountBalance from '../components/AccountBalance';
import Header from '../components/Header';
import { GetStarted } from '../components/GetStarted';
import { SavingCategories } from '../components/savings/SavingCategories';

export const Savings = () => {
  return (
    <main className="min-h-screen">
      <Header title="Savings" subtitle={`let's see how well you're doing.`} />
      <AccountBalance title="total balance" balance={2170.51} />
      <GetStarted title="build your savings">
        <img
          src="/src/assets/piggyvest-crop.jpg"
          alt="hi1"
          className="w-full h-full"
        />
      </GetStarted>
      <SavingCategories />
    </main>
  );
};
