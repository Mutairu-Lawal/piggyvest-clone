import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// relative paths
import ForgotPassword from './pages/(auth)/ForgotPassword';
import LoginPage from './pages/(auth)/LoginPage';
import SignUpPage from './pages/(auth)/SignUpPage';
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import Savings from './pages/Savings';
import Account from './pages/Account';
import InvestmentPage from './pages/InvestmentPage';
import Error404Page from './pages/Error404Page';

function App() {
  const [success, setSuccess] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="savings" element={<Savings />} />
          <Route path="account" element={<Account />} />
          <Route path="invest" element={<InvestmentPage />} />
        </Route>
        <Route path="/login" element={<LoginPage success={success} />} />
        <Route
          path="/register"
          element={<SignUpPage setSuccess={setSuccess} />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
