import { Container, Grid, Box, useTheme } from '@mui/material';
import ContactForm from './components/ContactForm';
import MapEmbed from './components/MapEmbed';
import bg from '@images/back.svg';

const ContactSection = () => {
  const theme = useTheme();
  return (
    <Box
      component='section'
      id='contact-us'
      sx={{
        'backgroundColor': '#8490c89e',
        'py': 6,
        'borderRadius': '100px 0px 0 0 ',
        'position': 'relative',
        'overflow': 'hidden',
        ':before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          backgroundImage: `url(${bg.src})`,
        },
      }}>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={4}>
          <Grid
            item
            size={{ sm: 12, md: 6 }}>
            <ContactForm />
          </Grid>
          <Grid
            item
            spacing={5}
            alignSelf={'center'}
            size={{ sm: 12, md: 6 }}>
            <MapEmbed />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;
