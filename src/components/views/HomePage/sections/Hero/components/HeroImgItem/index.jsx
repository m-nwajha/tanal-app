'use client';

// Import NextJs
import Image from 'next/image';

// Import MUI
import { Box, useTheme, useMediaQuery } from '@mui/material';

const HeroImgItem = ({ src, loading }) => {
  const theme = useTheme();

  // media query باستخدام breakpoints
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  if (loading) return null;

  return (
    <Box
      sx={{
        maxWidth: '100%',
        overflow: 'hidden',
      }}>
      <Image
        src={src}
        alt='hero-img'
        width={390}
        height={289}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          objectPosition: 'center',
          borderRadius: isTablet ? '40px 0 40px 0' : '50px 0 50px 0',
        }}
      />
    </Box>
  );
};

export default HeroImgItem;
