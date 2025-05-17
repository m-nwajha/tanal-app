import { Box } from '@mui/material';

const MapEmbed = () => (
  <Box
    component='div'
    sx={{
      height: 340,
      width: '100%',
      mb: { xs: 4, lg: 0 },
    }}>
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621'
      frameBorder='0'
      allowFullScreen
      style={{ border: 0, width: '100%', height: '100%', borderRadius: '20px' }}
      title='Google Map'
    />
  </Box>
);

export default MapEmbed;
