import { Link } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import AuthDashboard from '../../components/AuthDashboard';
import { Box } from '../../components/Box';

const FooterLink = () => {
  const footerLinks = [
    {
      id: 1,
      href: '/login',
      linkName: 'login',
      label: `Don't have an account? login`,
    },
    {
      id: 2,
      href: '#',
      label: `privacy policy`,
      linkName: 'privacys',
    },
  ];

  return footerLinks.map(({ label, href, id, linkName }) => (
    <div key={id} className="w-max mx-auto">
      <Link
        id={`${id}`}
        to={href}
        className="hover:text-gray-300 md:text-sm text-xs font-medium"
        aria-label={`click to vist ${linkName} page`}
      >
        <p className="mt-7">{label}</p>
      </Link>
    </div>
  ));
};

export default function SignUpPage() {
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
    phoneNumber: z.number({ message: 'Please input your phone Number' }),
    password: z
      .string()
      .trim()
      .min(6, { message: 'Must be 6 or more characters long' }),
    referrerCode: z.string().trim().optional(),
    referrerName: z.enum(referrerNames).optional(),
  });

  type UserSchema = z.infer<typeof userSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserSchema) => {
    console.log(data);
  };

  return (
    <AuthDashboard>
      <Box
        title="Login to your account"
        subtitle="Securely login to your PiggyVest"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="pb-3 px-1 mt-5 text-left space-y-7"
        >
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

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              {...register('email')}
              type="text"
              id="email"
              name="email"
              placeholder="Email Address"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              {...register('phoneNumber', { valueAsNumber: true })}
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
            />
            {errors.phoneNumber && (
              <span className="text-red-500">{errors.phoneNumber.message}</span>
            )}
          </div>

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
          </div>

          <button
            type="submit"
            className="uppercase bg-[#0d60d8] hover:bg-[#0d4dd8] text-white px-5 py-3 rounded-lg w-full font-extrabold rounded-bl-none"
            aria-label="click to submit the form"
          >
            Create Account
          </button>
        </form>
      </Box>
      <FooterLink />
    </AuthDashboard>
  );
}
