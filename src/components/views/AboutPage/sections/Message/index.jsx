'use client';
import SectionHeader from '@/components/ui/SectionHeader';
import { Stack, Container, useTheme, Box, Skeleton } from '@mui/material';
import Image from 'next/image';
import img from '@images/message-img.webp';
import { useEffect } from 'react';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';
const Message = () => {
  // Use API.
  const { data, loading, get } = useAPI(END_POINTS.MESSAGE, API_KEY);

  // Use Effect.
  useEffect(() => {
    get();
  }, []);
  const theme = useTheme();
  return (
    <Stack
      component='section'
      sx={{
        pt: '10rem',
        pb: '5rem',
      }}>
      <Container maxWidth='lg'>
        <Stack
          sx={{
            'position': 'relative',
            'borderRadius': '20px 0 20px 0;',
            'pt': '8rem',
            pb: '4rem',
            'px': '3rem',
            'border': `1px solid ${theme.palette.tertiary.main}`,
            '&:after': {
              content: '""',
              position: 'absolute',
              left: '20px',
              top: '-3px',
              height: '6px',
              width: '5rem',
              borderRadius: ' 50px',
              backgroundColor: theme.palette.secondary.main,
            },
            '&:before': {
              content: '""',
              position: 'absolute',
              left: '10px',
              bottom: '-3px',
              height: '6px',
              width: '1rem',
              borderRadius: ' 50px',
              backgroundColor: theme.palette.secondary.main,
            },
          }}>
          <Box
            sx={{
              position: 'absolute',
              borderRadius: '20px',
              transform: 'rotate(45deg)',
              overflow: 'hidden',
              width: '150px',
              height: '150px',
              top: '-77px',
              right: '75px',
              border: `5px solid ${theme.palette.tertiary.main}`,
              textAlign: 'center',
              backgroundColor: theme.palette.tertiary.main,
            }}>
            <Image
              src={img.src}
              alt='about-img'
              width={400}
              height={400}
              style={{
                position: 'relative',
                height: '100%',
                width: 'auto',
              }}
            />
          </Box>
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
                    height='9rem'
                  />
                </Stack>
          ) : (
            <SectionHeader
              type='light'
              title='رسالة تنال'
              description={data[0]?.description}
            />
          )}
        </Stack>
      </Container>
    </Stack>
  );
};

export default Message;
