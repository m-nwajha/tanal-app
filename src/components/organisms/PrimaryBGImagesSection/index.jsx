'use client';

// Import MUI Components.
import { Button, Container, Grid, Skeleton, Stack } from '@mui/material';

// Import Hooks.
import { useTheme } from '@emotion/react';

// Import Components.
import AboutTextSkeleton from '@/components/molecules/AboutTextSkeleton';
import AboutText from '@/components/molecules/AboutText';
import AboutImages from '@/components/molecules/AboutImages';

// Import Constants.
import { HOME } from '@/constants/HOME';

// Import Style.
import { WrapperSectionStyled } from './style';

const PrimaryBGImagesSection = ({ getDataAPI, getDataConstant, loading }) => {
  // Use Theme.
  const { colors } = useTheme();

  return (
    //Style Wrapper
    <WrapperSectionStyled>
      {/** Container */}
      <Container maxWidth='lg'>
        {/**  Section Row */}
        <Grid
          container
          spacing={3}>
          {/** Images Col Right */}
          <Grid
            size={{ sm: 12, md: 5 }}
            display={{ xs: 'none', lg: 'block' }}
            item>
            <AboutImages loading={loading} />
          </Grid>

          {/** Text and Btn Col Left */}
          <Grid
            item
            size={{ sm: 12, lg: 7 }}>
            <Stack spacing={3}>
              {loading ? (
                <AboutTextSkeleton />
              ) : (
                <AboutText
                  title={'تنال بين السطور'}
                  description={
                    'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.'
                  }
                />
              )}
              <div>
                {loading ? (
                  <Skeleton
                    variant='text'
                    width='9rem'
                    height='6rem'
                  />
                ) : (
                  <Button
                    variant='contained'
                    href='#'
                    sx={{
                      p: '0.4rem 1.4rem',
                      backgroundColor: colors.quaternary,
                      color: colors.primary,
                      fontWeight: 600,
                      borderRadius: '10px'
                    }}>
                    تعرف المزيد
                  </Button>
                )}
              </div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </WrapperSectionStyled>
  );
};

export default PrimaryBGImagesSection;
