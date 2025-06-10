import DashboardLayout from '@/components/layouts/DashboardLayout';
import { PAGES_META_DATA } from '@/constants/META_DATA';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { PATHS } from '@/constants/PATHS';
import { ROLES } from '@/constants/ROLES';

export const metadata = PAGES_META_DATA.dashboard;

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const role = cookieStore.get('role')?.value;

  if (role === ROLES.ADMIN)
    return <DashboardLayout>{children}</DashboardLayout>;
  else redirect(PATHS.AUTH.SIGNIN);
}
