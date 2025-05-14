'use client';
// Import Header.
import Header from '../shared/Header';

// Import Footer.
import Footer from '../shared/Footer';

// Import ToTop Btn.
import ToTopBtn from '../shared/ToTopBtn';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ToTopBtn />
      <Footer />
    </>
  );
};

export default MainLayout;
