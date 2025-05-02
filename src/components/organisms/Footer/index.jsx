'use client';
// Import ReactsJS & NextJS.
import { useEffect } from 'react';

// Import MUI Components.
import { Container, Grid } from '@mui/material';

// Import Hooks.
import useAPI from '@/hooks/useAPI';

// Import Components.
import AboutFooter from '@/components/molecules/AboutFooter';
import QuickLinks from '@/components/molecules/QuickLinks';
import OurProjects from '@/components/molecules/OurProjects';
import SocialMedia from '@/components/molecules/SocialMedia';
import Copyright from '@/components/molecules/Copyright';

// Import Constants.
import { END_POINTS } from '@/constants/END_POINTS';
import { FOOTER } from '@/constants/FOOTER';

// Import Style.
import { FooterStyled } from './style';

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
          {/** About Footer Grid */}
          <Grid
            item
            size={{ xs: 12, md: 3 }}>
            <AboutFooter
              getData={data}
              loading={loading}
            />
          </Grid>

          {/** Quick Links Grid */}
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

          {/** Our Project Grid */}
          <Grid
            item
            alignSelf='start'
            size={{ xs: 10, md: 3 }}>
            <OurProjects
              titleOurProjects={FOOTER.PROJECTS.title}
              iconOurProjects={FOOTER.PROJECTS.iconTitle}
            />
          </Grid>

          {/** Social Media Grid */}
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

        {/** Copyright */}
        <Copyright />
      </Container>
    </FooterStyled>
  );
};

export default Footer;
