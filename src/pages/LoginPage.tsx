import AuthDashboard from '../components/AuthDashboard';
import { Box } from '../components/Box';

export default function LoginPage() {
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
  return (
    <AuthDashboard>
      <Box
        title="Login to your account"
        subtitle="Securely login to your PiggyVest"
      >
        <form className="form pb-3 px-1 mt-5 text-left space-y-7">
          {/* array of forms inputs */}
          {[
            {
              labelName: 'Email or Phone Number',
              inputType: 'text',
              id: 'label_id_01',
            },
            {
              labelName: 'Password',
              inputType: 'password',
              id: 'label_id_02',
            },
          ].map(({ inputType, labelName, id }) => (
            <div key={id} className="form-group space-y-2">
              <label
                className="block text-xs text-gray-900 font-semibold"
                htmlFor={`${labelName}`}
              >
                {labelName}
              </label>
              <input type={`${inputType}`} id={`${labelName}`} />
            </div>
          ))}
          <button
            type="submit"
            className="uppercase bg-[#0d60d8] hover:bg-[#0d4dd8] text-white px-5 py-3 rounded-lg w-full font-extrabold rounded-bl-none"
          >
            log in
          </button>
        </form>
      </Box>

      {footerLinks.map(({ label, href, id, linkName }) => (
        <a
          key={id}
          href={href}
          className="hover:text-gray-300 md:text-sm text-xs font-medium"
          aria-label={`click to vist ${linkName} page`}
        >
          <h6 className="mt-7">{label}</h6>
        </a>
      ))}
    </AuthDashboard>
  );
}
