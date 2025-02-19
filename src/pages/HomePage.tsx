import Header from '../components/homepage/Header';
import AccountTypes from '../components/homepage/AccountTypes';
import { GetStarted } from '../components/homepage/GetStarted';
import { Todos } from '../components/homepage/Todos';
import { Navigations } from '../components/homepage/Navigations';
import { Stores } from '../components/homepage/Stores';
import { BestClient } from '../components/homepage/BestClient';
import { Transactions } from '../components/homepage/Transactions';
import { HomeShortcut } from '../components/homepage/HomeShortcut';

export default function HomePage() {
  return (
    <main>
      <Header />
      <HomeShortcut />
      <AccountTypes />
      <GetStarted />
      <Todos />
      <Navigations />
      <Stores />
      <BestClient />
      <Transactions />
    </main>
  );
}
