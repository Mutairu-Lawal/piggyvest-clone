import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Bounce, ToastContainer, toast } from 'react-toastify';

import { users } from '../../data/users';
import AuthDashboard from '../../components/AuthDashboard';
import Box from '../../components/Box';
import { setSessionStorage } from '../../utils/sessionStorage';

type CurrentUser = {
  emailOrPhoneNumber: string;
  password: string;
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const footerLinks = [
    {
      id: 'footer_link_id_01',
      href: '/register',
      linkName: 'register',
      label: `Don't have an account? Register`,
    },
    {
      id: 'footer_link_id_02',
      href: '/forgot-password',
      label: `Forgot Password`,
      linkName: 'forgot password',
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CurrentUser>();

  const handleOnSubmit: SubmitHandler<CurrentUser> = (currentUser) => {
    setIsLoading(true);

    const { emailOrPhoneNumber, password } = currentUser;

    setTimeout(() => {
      const userData = emailOrPhoneNumber.includes('@')
        ? users.filter(
            (user) => user.email === emailOrPhoneNumber.trim().toLowerCase()
          )
        : users.filter(
            (user) => user.phoneNumber === emailOrPhoneNumber.trim()
          );

      if (userData.length === 0) {
        toast.error('Incorrect email or password', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
        setIsLoading(false);
        return;
      }

      if (userData[0].password === password) {
        setSessionStorage('user', userData[0]);
        setIsLoading(false);
        navigate('/');
      } else {
        toast.error('Incorrect email or password', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <>
      <AuthDashboard>
        <Box
          title="Login to your account"
          subtitle="Securely login to your PiggyVest"
        >
          <form
            onSubmit={handleSubmit(handleOnSubmit)}
            className="pb-3 px-1 mt-5 text-left space-y-7"
          >
            <div className="form-group">
              <label htmlFor="emailOrPhoneNumber">Email or Phone Number</label>
              <input
                {...register('emailOrPhoneNumber', {
                  required: { value: true, message: 'field is required' },
                })}
                type="text"
                id="emailOrPhoneNumber"
                name="emailOrPhoneNumber"
              />
              {errors.emailOrPhoneNumber && (
                <p className="text-red-500">
                  {errors.emailOrPhoneNumber.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                {...register('password', {
                  required: {
                    value: true,
                    message: 'password required',
                  },
                })}
                type="password"
                id="password"
                name="password"
                autoComplete=""
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="uppercase bg-[#0d60d8] hover:bg-[#0d4dd8] text-white px-5 py-3 rounded-lg w-full font-extrabold rounded-bl-none"
            >
              {!isLoading && 'Login'}
              {isLoading && (
                <div className="flex items-center justify-center py-1">
                  <div className="loader"></div>
                </div>
              )}
            </button>
          </form>
        </Box>

        {footerLinks.map(({ label, href, id, linkName }) => (
          <Link
            key={id}
            to={href}
            className="hover:text-gray-300 md:text-sm text-xs font-medium"
            aria-label={`click to vist ${linkName} page`}
          >
            <h6 className="mt-7">{label}</h6>
          </Link>
        ))}
      </AuthDashboard>
      <ToastContainer />
    </>
  );
}
