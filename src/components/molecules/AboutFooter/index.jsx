'use client';
// Import Next.
import Link from 'next/link';

// Import MUI Components.
import { Button, Grid, Stack, Typography, useTheme } from '@mui/material';


// Import Components.
import Logo from '@/components/atoms/Logo';

// Import Constants.
import { FOOTER } from '@/constants/FOOTER';

const AboutFooter = ({getData}) => {
  // Use Theme.
  const { colors } = useTheme();

  return (
    <Stack spacing={2}>
      <Grid
        container
        alignItems='center'
        spacing={2}>
        <Logo
          height={80}
          variant='light'
        />
        <Typography
          variant='h6'
          fontSize='1.3rem'
          fontWeight='600'
          color={colors.quinary}>
          {FOOTER.TITLE}
        </Typography>
      </Grid>
      <Typography
        variant='body2'
        textAlign='right'
        color={colors.quaternary}>
        {getData.description}...
        <span>
          <Button
            component={Link}
            href='#'
            variant='text'
            color={colors.tertiary}>
            {FOOTER.READ_MORE}
          </Button>
        </span>
      </Typography>
    </Stack>
  );
};

export default AboutFooter;
