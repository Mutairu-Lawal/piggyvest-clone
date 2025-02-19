import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// relative paths
import ForgotPassword from './pages/(auth)/ForgotPassword';
import LoginPage from './pages/(auth)/LoginPage';
import SignUpPage from './pages/(auth)/SignUpPage';
import HomePage from './pages/HomePage';
import { MainLayout } from './layout/MainLayout';
import { Savings } from './pages/Savings';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container mx-auto max-w-[700px] border">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="savings" element={<Savings />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="*"
              element={
                <h1>
                  Not Found
                  <br />
                  <button className="bg-red-500 py-[12px] px-[2">
                    <Link to="/">Back to home</Link>
                  </button>
                </h1>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
