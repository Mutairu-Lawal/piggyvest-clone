import Header from '../components/Header';
import { GetStarted } from '../components/GetStarted';
import { Todos } from '../components/homepage/Todos';
import { Navigations } from '../components/homepage/Navigations';
import { Stores } from '../components/homepage/Stores';
import { BestClient } from '../components/homepage/BestClient';
import { Transactions } from '../components/homepage/Transactions';
import { HomeShortcut } from '../components/homepage/HomeShortcut';
import AccountBalance from '../components/AccountBalance';

export default function HomePage() {
  const user = 'lawal';
  return (
    <main>
      <Header
        isHome={true}
        title={`${user},`}
        subtitle="Good morning, wash your hands"
      />
      <HomeShortcut />
      <AccountBalance title="Total Savings" isHome balance={2170.51} />
      <GetStarted title="get started with piggyvest" isHome>
        <h1 className="font-semibold capitalize text-2xl">get started</h1>
        <div className="img">
          <img
            src="/src/assets/cropped.png"
            alt=""
            className="w-full h-full bg-blue-700 rounded-full"
          />
        </div>
      </GetStarted>
      <Todos />
      <Navigations />
      <Stores />
      <BestClient />
      <Transactions />
    </main>
  );
}
