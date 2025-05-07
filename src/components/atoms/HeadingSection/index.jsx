// Import Style.
import { useTheme } from '@emotion/react';
import { HeadingSectionStyled } from './style';

const HeadingSection = ({ variant, children, type, component }) => {
  const {colors} = useTheme();
  return (
    <HeadingSectionStyled
      align='center'
      color={type === 'light' ? 'primary' : colors.quinary}
      component={component}
      variant={variant}>
      <span>
        {children}
      </span>
    </HeadingSectionStyled>
  );
};

export default HeadingSection;
