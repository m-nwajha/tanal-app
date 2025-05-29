'use client';

// Import Next.
import Link from 'next/link';

// Import MUI Components.
import { Button, Container, Grid, Skeleton, Stack } from '@mui/material';

// Import Hooks.
import { useTheme } from '@emotion/react';

// Import Components.
import SectionTextSkeleton from './components/SectionTextSkeleton';
import SectionText from './components/SectionText';
import SectionImages from './components/SectionImages';

// Import Style.
import { WrapperSectionStyled } from './style';

const BlueBGAndImgs = ({
  button,
  title,
  description,
  imagesList,
  loading,
  type,
}) => {
  // Use Theme.
  const { colors } = useTheme();

  return (
    //Style Wrapper
    <WrapperSectionStyled type={type}>
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
            <SectionImages
              imagesList={imagesList}
              loading={loading}
            />
          </Grid>

          {/** Text and Btn Col Left */}
          <Grid
            item
            size={{ sm: 12, lg: 7 }}>
            <Stack spacing={2}>
              {loading ? (
                <SectionTextSkeleton />
              ) : (
                <SectionText
                  type={type}
                  title={title}
                  description={description}
                />
              )}
              {button && (
                <div>
                  {loading ? (
                    <Skeleton
                      variant='text'
                      width='9rem'
                      height='6rem'
                    />
                  ) : (
                    <Button
                      component={Link}
                      variant='contained'
                      href={button?.href}
                      sx={{
                        p: '0.4rem 1.4rem',
                        backgroundColor: colors.quaternary,
                        color: colors.primary,
                        fontWeight: 600,
                        borderRadius: '10px',
                      }}>
                      {button?.label}
                    </Button>
                  )}
                </div>
              )}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </WrapperSectionStyled>
  );
};

export default BlueBGAndImgs;
