import ForgotPassword from './pages/ForgotPassword';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  const activePage = {
    login: false,
    register: false,
    forgotPassword: true,
  };

  return (
    <>
      {activePage.login && <LoginPage />}
      {activePage.register && <SignUpPage />}
      {activePage.forgotPassword && <ForgotPassword />}
    </>
  );
}

export default App;
