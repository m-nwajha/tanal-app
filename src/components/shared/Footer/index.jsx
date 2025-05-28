'use client';
// Import ReactsJS & NextJS.
import { useEffect } from 'react';

// Import MUI Components.
import { Container, Grid } from '@mui/material';

// Import Components.
import AboutFooter from './components/AboutFooter';
import QuickLinks from './components/QuickLinks';
import OurProjects from './components/OurProjects';
import SocialMedia from './components/SocialMedia';
import ContactInfo from './components/ContactInfo';
import Copyright from './components/Copyright';

// Import Constants.
import { FOOTER } from '@/constants/FOOTER';

// Import Style.
import { FooterStyled } from './style';

const Footer = () => {
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
            <AboutFooter />
          </Grid>

          {/** Quick Links Grid */}
          <Grid
            item
            alignSelf='start'
            size={{ xs: 10, md: 3 }}>
            <QuickLinks />
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
              iconTitle={FOOTER.SOCIAL_MEDIA.iconTitle}
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
