'use client';
// Import MUI Components.
import { Container, Grid, Skeleton, Stack } from '@mui/material';

// Import Components.
import AboutFooter from '@/components/molecules/AboutFooter';
import OurProjects from '@/components/molecules/OurProjects';

// Import Style.
import { FooterStyled } from './style';
import { useEffect } from 'react';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import QuickLinks from '@/components/molecules/QuickLinks';
import { FOOTER } from '@/constants/FOOTER';
import SocialMedia from '@/components/molecules/SocialMedia';

const Footer = () => {
  // Use API.
  const { data, loading, get } = useAPI(`${END_POINTS.FOOTER}`);

  // Use Effect.
  useEffect(() => {
    get();
  }, []);


  return (
    <FooterStyled>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={4}
          justifyContent='center'
          alignItems='center'>
          <Grid
            item
            size={{ xs: 12, md: 3 }}>
            <AboutFooter
              getData={data}
              loading={loading}
            />
          </Grid>
          <Grid
            item
            alignSelf='start'
            size={{ xs: 10, md: 3 }}>
            <QuickLinks
              title={FOOTER.QUICK_LINKS.title}
              iconTitle={FOOTER.QUICK_LINKS.iconTitle}
              getData={FOOTER.QUICK_LINKS.menuItem}
              loading={loading}
            />
          </Grid>
          <Grid
            item
            alignSelf='start'
            size={{ xs: 10, md: 3 }}>
            <OurProjects
              titleOurProjects={FOOTER.PROJECTS.title}
              iconOurProjects={FOOTER.PROJECTS.iconTitle}
            />
          </Grid>
          <Grid
            item
            alignSelf='start'
            size={{ xs: 10, md: 3 }}>
            <SocialMedia
              title={FOOTER.SOCIAL_MEDIA.title}
              getData={data.socialMedia}
              iconTitle={FOOTER.SOCIAL_MEDIA.iconTitle}
              loading={loading}
            />
          </Grid>
        </Grid>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
