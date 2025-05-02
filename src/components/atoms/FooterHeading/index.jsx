// Import Style.
import { FooterHeadingStyled } from './style';
const FooterHeading = ({ children, icon }) => {
  return (
    <FooterHeadingStyled
      variant='h6'
      component='h6'>
      <span>{children}</span> {icon}
    </FooterHeadingStyled>
  );
};

export default FooterHeading;
