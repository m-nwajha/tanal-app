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
import { WrapperAboutStyled } from './style';

const PrimaryBGImagesSection = ({ getDataAPI, getDataConstant, loading }) => {
  // Use Theme.
  const { colors } = useTheme();

  return (
    <WrapperAboutStyled>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={3}>
          <Grid
            size={{ sm: 12, md: 5 }}
            display={{ xs: 'none', lg: 'block' }}
            item>
            <AboutImages loading={loading} />
          </Grid>
          <Grid
            item
            size={{ sm: 12, lg: 7 }}>
            {/* <Stack spacing={3}>
              {loading ? (
                <AboutTextSkeleton />
              ) : (
                <AboutText
                  title={HOME.ABOUT_US.title}
                  description={data?.betweenLines?.description}
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
            </Stack> */}
          </Grid>
        </Grid>
      </Container>
    </WrapperAboutStyled>
  );
};

export default PrimaryBGImagesSection;
