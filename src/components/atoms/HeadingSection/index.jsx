// Import Style.
import { HeadingSectionStyled } from './style';

const HeadingSection = ({ variant, children, type }) => {
  return (
    <HeadingSectionStyled
      align='center'
      color={type === 'light' ? 'primary' : ''}
      variant={variant? variant : 'h2'}>
      <span
        className={
          type === 'light' ? 'light_heading__section' : 'dark_heading__section'
        }>
        {children}
      </span>
    </HeadingSectionStyled>
  );
};

export default HeadingSection;
