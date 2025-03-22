import { useState } from 'react';

import Header from '../components/Header';
import GetStarted from '../components/GetStarted';
import Todos from '../components/homepage/Todos';
import Navigations from '../components/homepage/Navigations';
import Stores from '../components/homepage/Stores';
import BestClient from '../components/homepage/BestClient';
import HomeShortcut from '../components/homepage/HomeShortcut';
import AccountBalance from '../components/AccountBalance';
import QuickSave from '../components/homepage/QuickSave';
import ShowModal from '../components/homepage/ShowModal';
import RecentTransactions from '../components/homepage/RecentTransactions';
import TransactionsHistory from '../components/homepage/TransactionsHistory';

import { getTheDayTime, getTotalBalance } from '../utils/fun';
import { useAppSelector } from '../app/hooks';
import { UserProps } from '../data/users';
import ConditionsOfUse from '../components/homepage/ConditionsOfUse';

export default function HomePage() {
  const showQuickSave = useAppSelector(
    (state) => state.quickSave.showQuickSave
  );
  const [showTransactionHistory, setShowTransactionHistory] = useState(false);
  const [toastModal, setToastModal] = useState(false);
  const [serverResponse, setServerResponse] = useState<string | null>(null);
  const currentUser: UserProps = useAppSelector(
    (state) => state.currentUserData.user
  );

  return (
    <>
      {!showQuickSave && !showTransactionHistory && (
        <main>
          <Header
            title={`${currentUser.fullName.slice(
              0,
              currentUser.fullName.indexOf(' ')
            )},`}
            subtitle={getTheDayTime()}
          />
          <HomeShortcut />
          {currentUser && (
            <AccountBalance
              title="Total Savings"
              isHome
              balance={getTotalBalance(currentUser)}
            />
          )}

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

          {/* render todos only when its availabe */}
          {currentUser.transactions.length === 0 || !currentUser.userName ? (
            <Todos />
          ) : null}

          <Navigations setShowTransactionHistory={setShowTransactionHistory} />
          <Stores />
          <BestClient />
          <RecentTransactions
            setShowTransactionHistory={setShowTransactionHistory}
          />
        </main>
      )}

      {/* render quick save modal */}
      {showQuickSave && currentUser && (
        <QuickSave
          setToastModal={setToastModal}
          setServerResponse={setServerResponse}
        />
      )}

      {/* render toast modal */}
      {toastModal && (
        <ShowModal
          setToastModal={setToastModal}
          serverResponse={serverResponse}
        />
      )}

      {/* render conditions of use modal */}
      {!currentUser.userHasSeenConditions && <ConditionsOfUse />}

      {/* render transaction history modal */}
      {showTransactionHistory && (
        <TransactionsHistory
          setShowTransactionHistory={setShowTransactionHistory}
        />
      )}
    </>
  );
}
