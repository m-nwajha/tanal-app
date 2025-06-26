'use client';

import { Box, Typography, useTheme } from '@mui/material';
import { format } from 'date-fns';
import { arSA } from 'date-fns/locale';

const WelcomeHeader = ({ userName = 'المدير العام' }) => {
  const theme = useTheme();

  const today = format(new Date(), 'eeee، d MMMM yyyy', { locale: arSA });

  return (
    <Box
      sx={{
        my: 4,
        p: 3,
        borderRadius: '16px',
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        textAlign: 'right',
      }}>
      <Typography
        variant='h5'
        >
        مرحبًا، {userName} 👋
      </Typography>
      <Typography
        variant='body1'
        mt={1}>
        اليوم هو {today}
      </Typography>
    </Box>
  );
};

export default WelcomeHeader;
