import { Link, useNavigate } from 'react-router-dom';
import AuthDashboard from '../../components/AuthDashboard';
import Box from '../../components/Box';
import { useState } from 'react';
import { UserProps } from '../../data/users';
import { API_KEY, BASE_URL } from '../../utils/fun';

const footerLinks = [
  {
    id: 'footer_link_id_05',
    href: '/login',
    linkName: 'login',
    label: `Back to login`,
  },
];

export default function ForgotPassword() {
  const [userEmail, setUserEmail] = useState({ email: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validate the user input before sending the request
    if (!userEmail.email) return setError(`Input can't be empty`);
    if (!emailRegex.test(userEmail.email))
      return setError('Please enter a valid email address.');

    const fetchUser = async () => {
      try {
        setIsLoading(true);

        const res = await fetch(BASE_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': API_KEY,
          },
        });

        if (!res.ok) throw new Error(res.statusText);

        const data = await res.json();
        const dataRecords: UserProps[] | [] = data.record.users;

        const user = dataRecords.find(
          (user) =>
            user.email.toLocaleLowerCase() ===
            userEmail.email.toLocaleLowerCase()
        );

        if (!user) throw new Error('No matching user found in our records.');

        // Alert the user their password
        alert(`Your forgotten password is "${user.password}"`);
        // Redirect the user to the login page
        navigate('/login');
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError(''); // Clear error message on input change
    const { name, value } = e.target;
    setUserEmail((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <AuthDashboard>
      <Box
        title="Forgot Password"
        subtitle="Enter your email address to reset your password"
      >
        <form
          className="form pb-3 px-1 mt-5 text-left space-y-7"
          onSubmit={handleSubmit}
        >
          <div className="form-group space-y-2">
            <label
              className="block text-xs text-gray-900 font-semibold"
              htmlFor="email"
            >
              Email Address
            </label>

            <input
              type="text"
              name="email"
              id="email"
              placeholder="e.g john@gmail.com"
              value={userEmail.email}
              onChange={handleChange}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>

          <button
            type="submit"
            className="uppercase bg-[#0d60d8] hover:bg-[#0d4dd8] text-white px-5 py-3 rounded-lg w-full font-extrabold rounded-bl-none"
          >
            {!isLoading && 'Reset Password'}
            {isLoading && (
              <div className="flex items-center justify-center py-1">
                <div className="loader"></div>
              </div>
            )}
          </button>
        </form>
      </Box>

      {footerLinks.map(({ label, href, id, linkName }) => (
        <div key={id} className="mt-3 w-max mx-auto p-2">
          <Link
            to={href}
            className="hover:text-gray-300 md:text-sm text-xs font-medium"
            aria-label={`click to visit ${linkName} page`}
          >
            <p>{label}</p>
          </Link>
        </div>
      ))}
    </AuthDashboard>
  );
}
