'use client';
import { Box, Container, Grid, useTheme } from '@mui/material';
import bg from '@images/bg-pattern2.svg';
import Form from './Form';

const FormSection = () => {
  const theme = useTheme();
  return (
    <Box
      component='section'
      sx={{
        'paddingBlock': '7rem 5rem',
        'my': '4rem',
        'position': 'relative',
        '&:after': {
          content: '""',
          position: 'absolute',
          inset: '0',
          width: '85%',
          zIndex: '-2',
          backgroundColor: theme.palette.primary?.main,
          borderRadius: '90px 0 0 0px',
        },
        [theme.breakpoints.down('md')]: {
          '&:after': {
            width: '98%',
            borderRadius: '50px 0 0 0px',
          },
        },
        '&:before': {
          content: '""',
          position: 'absolute',
          inset: '0',
          zIndex: '-1',
          backgroundImage: `url(${bg.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right top',
          backgroundSize: '30%',
          opacity: '0.1',
        },
      }}>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={4}>
          <Grid
            item
            size={10}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FormSection;
