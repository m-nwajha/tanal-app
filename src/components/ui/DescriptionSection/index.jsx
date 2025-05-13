// Import Style.
import { DescriptionSectionStyled } from './style';

const DescriptionSection = ({ children, variant, type }) => {
  return (
    <DescriptionSectionStyled
      align='center'
      color={type === 'light' ? 'secondary' : ''}
      variant={variant ? variant : 'h5'}>
      {children}
    </DescriptionSectionStyled>
  );
};

export default DescriptionSection;
