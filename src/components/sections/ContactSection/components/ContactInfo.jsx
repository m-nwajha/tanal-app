import { Typography, Box, Stack } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactInfo = () => (
  <Stack spacing={2}>
    <Box sx={{ display: 'flex', alignItems: 'center', color: '#283d50' }}>
      <RoomIcon sx={{ fontSize: 32, color: '#192954', mr: 1 }} />
      <Typography variant='body2'>المملكة العربية السعودية - الرياض</Typography>
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', color: '#283d50' }}>
      <EmailIcon sx={{ fontSize: 32, color: '#192954', mr: 1 }} />
      <Typography variant='body2'>info@tanalaloula.sa</Typography>
    </Box>

    <Box sx={{ display: 'flex', alignItems: 'center', color: '#283d50' }}>
      <PhoneIcon sx={{ fontSize: 32, color: '#192954', mr: 1 }} />
      <Typography variant='body2'>+966 55 558 2035</Typography>
    </Box>
  </Stack>
);
export default ContactInfo;
