// Import Style.
import { HeadingSectionStyled } from './style';

const HeadingSection = ({ variant, children, type, component }) => {
  return (
    <HeadingSectionStyled
      align='center'
      color={type === 'light' ? 'primary' : ''}
      component={component}
      variant={variant}>
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
