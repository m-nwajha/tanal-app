// Import NextJS.
import { redirect } from 'next/navigation';

// Import PATHS.
import { PATHS } from '@/constants/PATHS';

export default function Home() {
  return redirect(PATHS.HOME);
}
