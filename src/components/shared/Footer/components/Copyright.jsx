// Import MUI Components.
import { Button, Grid, Typography } from '@mui/material';

// Import Constants.
import { META_DATA } from '@/constants/META_DATA';
import { PATHS } from '@/constants/PATHS';

const Copyright = () => {
  return (
    <Grid
      container
      mt={4}
      p={1}
      borderTop='1px solid #676ca399'
      alignItems='center'>
      <Grid
        item
        textAlign='left'
        size={{ xs: 12 }}>
        <Typography variant='body2'>
          <Button
            color='white'
            href={PATHS.HOME}>
            {META_DATA.title}
          </Button>
          &copy; {new Date().getFullYear()} All Rights Reserved, Copyright
          <Button
            target='_blank'
            color='white'
            href='https://nawjha.tech/'>
            ❤️Nawjha
          </Button>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Copyright;
