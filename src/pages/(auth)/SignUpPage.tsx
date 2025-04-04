import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { IoMdArrowDropdown } from 'react-icons/io';

// Components
import AuthDashboard from '../../components/AuthDashboard';
import Box from '../../components/Box';

// Utilities
import { API_KEY, BASE_URL, generateAccountNumber } from '../../utils/fun';
import { UserProps } from '../../data/users';
import { useAppDispatch } from '../../app/hooks';
import { updateUserState } from '../../app/features/currentUserData';
import { setSessionStorage } from '../../utils/sessionStorage';

/**
 * Create footer links for signup page
 */

const FooterLink = () => {
  const footerLinks = [
    {
      id: 1,
      href: '/login',
      linkName: 'login',
      label: `Already have an account? Login`,
    },
    {
      id: 2,
      href: '#',
      label: `privacy policy`,
      linkName: 'privacy',
    },
  ];

  return footerLinks.map(({ label, href, id, linkName }) => (
    <div key={id} className="w-max mx-auto">
      <Link
        id={`${id}`}
        to={href}
        className="hover:text-gray-300 md:text-sm text-xs font-medium"
        aria-label={`click to visit ${linkName} page`}
      >
        <p className="mt-7">{label}</p>
      </Link>
    </div>
  ));
};

/**
 * Create signup page
 */

export default function SignUpPage({
  setSuccess,
}: {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  let emails = [];
  const [isLoading, setIsLoading] = useState(false);
  const [postError, setPostError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const referrerNames = [
    '',
    'Facebook',
    'Twitter',
    'Instagram',
    'Friend/Family/Coworker Referral',
    'Google Search',
    'Google Playstore',
    'Online Blog',
    'local Newspaper',
    'At an event',
    'Other',
  ] as const;

  const userSchema = z.object({
    fullName: z
      .string()
      .min(5, { message: 'Must be 5 or more characters long' })
      .trim()
      .toLowerCase(),
    email: z.string().email().trim().toLowerCase(),
    phoneNumber: z
      .string()
      .min(10, { message: 'Please enter a valid phone number' })
      .trim(),
    password: z
      .string()
      .trim()
      .min(6, { message: 'Must be 6 or more characters long' }),
    referrerCode: z.string().trim().optional(),
    referrerName: z.enum(referrerNames).optional(),
  });

  const navigate = useNavigate();

  type UserSchema = z.infer<typeof userSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserSchema) => {
    // create new user object
    const newClient: UserProps = {
      id: uuidv4(),
      accountNumber: generateAccountNumber(),
      userName: '',
      piggyPoints: 0,
      userHasSeenConditions: false,
      transactions: [],
      authPin: '',
      referrerPoints: 0,
      showBalance: false,
      accounts: [
        {
          savings: 0,
          flexNaira: 0,
          safeLock: 0,
          target: 0,
        },
      ],
      ...data,
    };

    const getAndPostData = async () => {
      try {
        setIsLoading(true);
        setPostError(null);
        setEmailError(null);

        // get all users emails
        const response = await fetch(BASE_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': API_KEY,
          },
        });

        if (!response.ok) throw new Error(response.statusText);

        const data = await response.json();

        const dataRecords = data.record.users;

        emails = dataRecords.map((user: UserProps) => user.email);

        // checking if the new client email exists
        if (emails.includes(newClient.email))
          throw new Error('Email already exists');

        // posting new user to database
        const res = await fetch(
          'https://api.jsonbin.io/v3/b/67c7e315acd3cb34a8f53a7b/',
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'X-Master-Key': API_KEY,
            },
            body: JSON.stringify({ users: [...dataRecords, newClient] }), // adding new user to the array
          }
        );

        if (!res.ok)
          throw new Error('Error creating an account. Try Again Later');

        // save data to web storage
        setSessionStorage('user', newClient);
        dispatch(updateUserState(newClient));

        setSuccess(true);
        navigate('/login');
      } catch (err: unknown) {
        if (err instanceof Error) {
          if (err.message === 'Email already exists') {
            setEmailError(err.message);
            return toast.error(err.message, {
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
          } else {
            setPostError(err.message);
            toast.error(postError, {
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
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    getAndPostData();
  };

  return (
    <AuthDashboard>
      <Box
        title="Login to your account"
        subtitle="Securely login to your PiggyVest"
      >
        {/* signup form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pb-3 px-1 mt-5 text-left space-y-7"
        >
          {/* fullName */}
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              {...register('fullName')}
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
            />
            {errors.fullName && (
              <span className="text-red-500">{errors.fullName.message}</span>
            )}
          </div>

          {/* email */}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              {...register('email')}
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
              onChange={() => {
                setEmailError(null);
              }}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>

          {/* phone number */}
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              {...register('phoneNumber')}
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
            />
            {errors.phoneNumber && (
              <span className="text-red-500">{errors.phoneNumber.message}</span>
            )}
          </div>

          {/* password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              {...register('password')}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              autoComplete=""
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>

          {/* referrer code */}
          <div className="form-group">
            <label htmlFor="referrerCode">
              Referrer Phone or Promo Code (Optional)
            </label>
            <input
              {...register('referrerCode')}
              type="number"
              id="referrerCode"
              name="referrerCode"
              placeholder="Referrer Phone Or Promo Code"
            />
          </div>

          {/* referrer name */}
          <div className="form-group">
            <label htmlFor="referrerName">
              How Did You Hear About us? (Optional)
            </label>
            <select id="referrerName" {...register('referrerName')}>
              {referrerNames.map((option) => (
                <option key={option} value={option}>
                  {option === '' ? 'Click to select' : option}
                </option>
              ))}
            </select>
            <div className="absolute top-[50%] right-[3%] translate-x-[5%] translate-y-[-10%]">
              <IoMdArrowDropdown />
            </div>
          </div>

          <button
            type="submit"
            className="uppercase bg-[#0d60d8] hover:bg-[#0d4dd8] text-white px-5 py-3 rounded-lg w-full font-extrabold rounded-bl-none"
            aria-label="click to submit the form"
          >
            {!isLoading && 'Create Account'}
            {isLoading && (
              <div className="flex items-center justify-center py-1">
                <div className="loader"></div>
              </div>
            )}
          </button>

          <ToastContainer />
        </form>
      </Box>
      <FooterLink />
    </AuthDashboard>
  );
}
