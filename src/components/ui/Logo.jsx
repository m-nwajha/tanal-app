// Import MUI + Next Components
import { Box } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

// Import Constants
import { PATHS } from '@/constants/PATHS';
import { LOGO } from '@/constants/LOGO';

const Logo = ({ variant, height, unLiked, moreStyle }) => {
  const src =
    variant === 'light'
      ? LOGO.TITLE_LIGHT
      : variant === 'dark'
      ? LOGO.TITLE_DARK
      : '';

  return (
    <Box
      component={Link}
      href={unLiked ? '#' : PATHS.HOME}
      sx={{
        display: 'flex',
        alignItems: 'center',
        moreStyle,
      }}>
      <Image
        height={height}
        width={300}
        className='logo'
        alt='logo'
        src={src}
        style={{ objectFit: 'cover', width: 'auto' }}
      />
    </Box>
  );
};

export default Logo;
