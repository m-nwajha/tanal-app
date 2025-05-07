// Import App Layout.
import AppLayout from '@/components/layouts/AppLayout';

// Import Global Styles.
import '@/styles/globals.css';

export const metadata = {
  title: 'شركة تنال للاستثمار | Tanal',
  description: 'شركة تنال الأول للاستثمار'
};

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
