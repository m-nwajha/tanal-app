// Import App Layout.
import AppLayout from '@/components/layouts/AppLayout';
import { META_DATA } from '@/constants/META_DATA';

// Import Global Styles.
import '@/styles/globals.css';

export const metadata = META_DATA;

export default function RootLayout({ children }) {
  return (
    <html
      lang='ar'
      dir='rtl'
      suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* App Layout. */}
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
