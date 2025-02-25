import Header from '../components/account/Header';
import Profile from '../components/account/Profile';
import AccountDetails from '../components/account/AccountDetails';
import AccountSettings from '../components/account/AccountSettings';
import ShowBalance from '../components/account/ShowBalance';

const Account = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Profile />
      <AccountDetails />
      <ShowBalance />
      <AccountSettings />
    </main>
  );
};

export default Account;
