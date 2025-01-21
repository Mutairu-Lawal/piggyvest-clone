import { BrowserRouter, Route, Routes } from 'react-router-dom';

// relative paths
import ForgotPassword from './pages/(auth)/ForgotPassword';
import LoginPage from './pages/(auth)/LoginPage';
import SignUpPage from './pages/(auth)/SignUpPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
