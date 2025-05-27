'use client';
// Import Next.
import Link from 'next/link';
import { useEffect } from 'react';

// Import MUI Components.
import {
  Box,
  Button,
  Grid,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

// Import Components.
import Logo from '@/components/atoms/Logo';

// Import Constants.
import { FOOTER } from '@/constants/FOOTER';
import { PATHS } from '@/constants/PATHS';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';

const AboutFooter = ({ getDataAPI }) => {
  // Use API.
  const { data, loading, get } = useAPI(END_POINTS.BETWEEN_LINES, API_KEY);

  // Use Effect.
  useEffect(() => {
    get();
  }, []);
  
  // Use Theme.
  const { colors } = useTheme();

  const maxLength = 100;

  return (
    <Stack spacing={2}>
      <Grid
        container
        alignItems='center'
        spacing={2}>
        {loading ? (
          <Skeleton
            sx={{ bgcolor: 'secondary', borderRadius: '10px 0 10px 0' }}
            width={63}
            height={140}
          />
        ) : (
          <Logo
            height={80}
            variant='light'
          />
        )}
        <Typography
          variant='h6'
          fontSize='1.3rem'
          fontWeight='600'
          color={colors.quinary}>
          {loading ? (
            <Skeleton
              width={150}
              variant='text'
              sx={{ fontSize: '1.4rem' }}
            />
          ) : (
            FOOTER.TITLE
          )}
        </Typography>
      </Grid>
      {loading ? (
        <Box>
          <Skeleton
            sx={{ width: '100%', fontSize: '1rem' }}
            variant='text'
          />
          <Skeleton
            sx={{ width: '100%', fontSize: '1rem' }}
            variant='text'
          />
          <Skeleton
            sx={{ width: '40%', fontSize: '1rem' }}
            variant='text'
          />
        </Box>
      ) : (
        <Typography
          variant='body2'
          textAlign='right'
          color={colors.quaternary}>
          {data[0]?.description.length > maxLength
            ? data[0]?.description.slice(0, maxLength) + '...'
            : data[0]?.description}
          <span>
            <Button
              component={Link}
              href={PATHS.ABOUT}
              variant='text'
              color={colors.tertiary}>
              {FOOTER.READ_MORE}
            </Button>
          </span>
        </Typography>
      )}
    </Stack>
  );
};

export default AboutFooter;
