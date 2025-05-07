'use client';
// Import Header.
import Header from '../organisms/Header';

// Import Footer.
import Footer from '../organisms/Footer';

// Import ToTop Btn.
import ToTopBtn from '../atoms/ToTopBtn';

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
