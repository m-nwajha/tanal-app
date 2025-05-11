// Import Next Hooks & Components.
import Image from 'next/image';

// Import Constants.
import { PATHS } from '@/constants/PATHS';
import { LOGO } from '@/constants/LOGO';

// Import Style.
import { LogoStyled } from './style';

const Logo = ({ variant, height }) => {
  return (
    <>
      <LogoStyled href={PATHS.HOME}>
        <Image
          height={height}
          width={300}
          className='logo'
          alt='logo'
          src={
            variant === 'light'
              ? LOGO.TITLE_LIGHT
              : 'dark'
              ? LOGO.TITLE_DARK
              : //If add More Variant.
                ''
          }
        />
      </LogoStyled>
    </>
  );
};

export default Logo;
