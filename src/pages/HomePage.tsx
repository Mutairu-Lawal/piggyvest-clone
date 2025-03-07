import { useState, useEffect } from 'react';

import Header from '../components/Header';
import GetStarted from '../components/GetStarted';
import { Todos } from '../components/homepage/Todos';
import { Navigations } from '../components/homepage/Navigations';
import { Stores } from '../components/homepage/Stores';
import { BestClient } from '../components/homepage/BestClient';
import { Transactions } from '../components/homepage/Transactions';
import { HomeShortcut } from '../components/homepage/HomeShortcut';
import AccountBalance from '../components/AccountBalance';
import { getSessionStorage } from '../utils/sessionStorage';
import { UserProps } from '../data/users';

export default function HomePage() {
  const [user, setUser] = useState<UserProps | null>(null);
  // const time = Date.now();

  useEffect(() => {
    setUser(() => {
      const user = getSessionStorage('user');
      return user ? user : null;
    });
  }, []);

  return (
    user && (
      <main>
        <Header
          isHome={true}
          title={`${user.fullName.slice(0, user.fullName.indexOf(' '))},`}
          subtitle="Good morning, wash your hands"
        />
        <HomeShortcut />
        <AccountBalance title="Total Savings" isHome balance={user.balance} />
        <GetStarted title="get started with piggyvest" isHome>
          <h1 className="font-semibold capitalize text-2xl">get started</h1>
          <div className="img">
            <img
              src="/src/assets/cropped.png"
              alt="image of a piggy bank"
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
    )
  );
}
