import { ReactNode } from 'react';

import Logo from './Logo';

export default function AuthDashboard({ children }: { children: ReactNode }) {
  return (
    <section className="bg-[#062863] min-h-dvh text-center py-14 px-5 text-white">
      <Logo />
      {children}
    </section>
  );
}
