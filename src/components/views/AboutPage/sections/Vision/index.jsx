'use client';
import { Box, Container, Grid, Skeleton, Stack, useTheme } from '@mui/material';
import bg from '@images/bg-pattern2.svg';
import img from '@images/vision-img.webp';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import { useEffect } from 'react';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';
const Vision = () => {
  // Use API.
  const { data, loading, get } = useAPI(END_POINTS.VISION, API_KEY);

  // Use Effect.
  useEffect(() => {
    get();
  }, []);
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
            spacing={4}
            alignSelf='center'
            size={{ sm: 12, md: 7 }}>
            {loading || data.length === 0 ? (
              <Stack
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                spacing={4}>
                <Skeleton
                  variant='text'
                  width='30%'
                  height='6rem'
                />
                <Skeleton
                  variant='rectangular'
                  width='100%'
                  height='6rem'
                />
              </Stack>
            ) : (
              <SectionHeader
                type='dark'
                title='رؤية تنال'
                description={data[0]?.description}
              />
            )}
          </Grid>
          <Grid
            item
            size={{ xs: 12, sm: 12, md: 5 }}>
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
