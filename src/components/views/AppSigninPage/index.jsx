'use client';
import {
  Box,
  Grid,
  Typography,
  useTheme,
  Container,
} from '@mui/material';
import Logo from '@/components/ui/Logo';
import FormLogin from './sections/FormLogin';
const AppSigninPage = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        'backgroundColor': theme.palette.primary.main,
        'position': 'fixed',
        'inset': 0,
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'direction': 'rtl',
        'overflow': 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}>
      <Container maxWidth='sm'>
        <Box
          sx={{
            boxShadow:
              '0 0.2rem 0.2rem -0.2rem rgba(31, 27, 45, 0.08), 0 0.25rem 0.75rem rgba(31, 27, 45, 0.08)',
            borderRadius: 4,
            mx: 'auto',
            backgroundColor: '#fff',
          }}>
          <Grid container>
            <Grid
              item
              size={12}
              p={5}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Logo
                  height={90}
                  variant='dark'
                />
              </Box>
              <Box mt={6}>
                <Typography
                  variant='h5'
                  color={theme.palette.primary.main}
                  mb={2}>
                  مرحبا بك مجدداً , شركة تنال
                </Typography>

                {/** login form */}
                <FormLogin />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AppSigninPage;
