'use client';
// Import Header.
import Header from '../shared/Header';

// Import Footer.
import Footer from '../shared/Footer';

// Import ToTop Btn.
import ToTopBtn from '../shared/ToTopBtn';

import ContactSection from '../shared/ContactSection';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ContactSection />
      <ToTopBtn />
      <Footer />
    </>
  );
};

export default MainLayout;
