import AuthDashboard from '../../components/AuthDashboard';
import { Box } from '../../components/Box';

export default function ForgotPassword() {
  const footerLinks = [
    {
      id: 'footer_link_id_05',
      href: '/login',
      linkName: 'login',
      label: `Back to login`,
    },
  ];

  const formInput = [
    {
      labelName: 'Email Address',
      inputType: 'email',
      id: 'label_id_02',
      placeholder: 'e.g john@gmail.com',
    },
  ];

  return (
    <AuthDashboard>
      <Box
        title="Forgot Password"
        subtitle="Enter your email address to reset your password"
      >
        <form className="form pb-3 px-1 mt-5 text-left space-y-7">
          {/* array of forms inputs */}
          {formInput.map(({ inputType, labelName, id, placeholder }) => (
            <div key={id} className="form-group space-y-2">
              <label
                className="block text-xs text-gray-900 font-semibold"
                htmlFor={`${labelName}`}
              >
                {labelName}
              </label>

              <input
                type={`${inputType}`}
                id={`${labelName}`}
                placeholder={`${placeholder}`}
              />
            </div>
          ))}

          <button
            type="submit"
            className="uppercase bg-[#0d60d8] hover:bg-[#0d4dd8] text-white px-5 py-3 rounded-lg w-full font-extrabold rounded-bl-none"
          >
            Reset PasswordS
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
