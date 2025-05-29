'use client';
import { Box, Container, Grid, useTheme } from '@mui/material';
import bg from '@images/bg-pattern2.svg';
import img from '@images/vision-img.webp';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
const Vision = () => {
  const theme = useTheme();

  return (
    <Box
      component='section'
      sx={{
        'paddingBlock': '7rem 5rem',
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
            spacing={4}
            alignSelf='center'
            size={{ sm: 12, md: 7 }}>
            <SectionHeader
              type='dark'
              title='رؤية تنال'
              description='هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى'
            />
            <SectionHeader
              type='dark'
              title='رسالة تنال'
              description='هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى'
            />
          </Grid>
          <Grid
            item
            size={{ sm: 12, md: 5 }}>
            <Box
              sx={{
                'transform': 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
                'transition': 'transform 0.5s ease',
                '&:hover': {
                  transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)',
                },
              }}>
              <Image
                src={img.src}
                alt='vision-img'
                width={390}
                height={289}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  borderRadius: '20px',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Vision;
