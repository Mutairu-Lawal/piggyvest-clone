import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  const activePage = {
    login: false,
    register: true,
  };

  return (
    <>
      {activePage.login && <LoginPage />}
      {activePage.register && <SignUpPage />}
    </>
  );
}

export default App;
