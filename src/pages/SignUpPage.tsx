import AuthDashboard from '../components/AuthDashboard';
import { Box } from '../components/Box';

export default function SignUpPage() {
  const footerLinks = [
    {
      id: 'footer_link_id_03',
      href: '/login',
      linkName: 'login',
      label: `Don't have an account? login`,
    },
    {
      id: 'footer_link_id_04',
      href: '#',
      label: `privacy policy`,
      linkName: 'privacys',
    },
  ];

  const formInputs = [
    {
      labelName: 'Full Name',
      inputType: 'text',
      id: 'label_id_01',
      placeholder: 'Full Name',
    },
    {
      labelName: 'Email Address',
      inputType: 'email',
      id: 'label_id_02',
      placeholder: 'Email Address',
    },
    {
      labelName: 'Phone Number',
      inputType: 'tel',
      id: 'label_id_03',
      placeholder: 'Phone Number',
    },
    {
      labelName: 'Password',
      inputType: 'password',
      id: 'label_id_04',
      placeholder: 'Password',
    },
    {
      labelName: 'Referrer Phone or Promo Code (Optional)',
      inputType: 'text',
      id: 'label_id_05',
      placeholder: 'Referrer Phone Or Promo Code',
    },
    {
      labelName: 'How Did You Hear About us? (Optional)',
      inputType: 'select',
      id: 'label_id_06',
      placeholder: '',
      values: [
        'Click to select',
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
      ],
    },
  ];

  return (
    <AuthDashboard>
      <Box
        title="Login to your account"
        subtitle="Securely login to your PiggyVest"
      >
        <form className="pb-3 px-1 mt-5 text-left space-y-7">
          {/* array of forms inputs */}
          {formInputs.map(
            ({ inputType, labelName, id, placeholder, values }) => (
              <div key={id} className="form-group space-y-2">
                <label
                  className="block text-xs text-gray-900 font-semibold"
                  htmlFor={`${labelName}`}
                >
                  {labelName}
                </label>

                {inputType === 'select' ? (
                  <select id={`${labelName}`}>
                    {values?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={`${inputType}`}
                    id={`${labelName}`}
                    placeholder={`${placeholder}`}
                  />
                )}
              </div>
            )
          )}

          <button
            type="submit"
            className="uppercase bg-[#0d60d8] hover:bg-[#0d4dd8] text-white px-5 py-3 rounded-lg w-full font-extrabold rounded-bl-none"
          >
            Create Account
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
