// Import MUI Components.
import { Button, Grid, Typography, useTheme } from '@mui/material';

// Import Constants.
import { META_DATA } from '@/constants/META_DATA';
import { PATHS } from '@/constants/PATHS';


const DashboardFooter = () => {
  const theme = useTheme()
  return (
    <Grid
      container
      p={1}
      sx={{ backgroundColor: theme.palette.quaternary.main}}
      alignItems='center'>
      <Grid
        item
        textAlign='center'
        size={{ xs: 12 }}>
        <Typography variant='body2' color='primary'>
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
}

export default DashboardFooter