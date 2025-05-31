import { Box, Stack, useTheme, Button, Skeleton } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const ContactInfo = ({ getData, loading }) => {
  const theme = useTheme();

  const contactInfoData = [
    {
      label: getData?.address,
      icon: <RoomIcon fontSize='small' />,
      skeletonWidth: 150,
    },
    {
      label: getData?.email,
      icon: <EmailIcon fontSize='small' />,
      href: `mailto:${getData?.email}`,
      skeletonWidth: 180,
    },
    {
      label: getData?.mobile,
      icon: <PhoneIcon fontSize='small' />,
      href: `tel:${getData?.mobile}`,
      skeletonWidth: 120,
    },
  ];

  return (
    <Stack
      spacing={2}
      sx={{ mt: 4, mr: 4 }}>
      {contactInfoData.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: theme.palette.quinary?.main,
          }}>
          {loading || !getData ? (
            <Skeleton
              variant='text'
              width={item.skeletonWidth}
              sx={{ mr: 1, fontSize: '1rem' }}
            />
          ) : (
            <>
              {item.icon}
              <Button
                href={item?.href || '#'}
                variant='body2'
                sx={{ mr: 1, p: 0, fontSize: '1rem' }}>
                {item.label}
              </Button>
            </>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default ContactInfo;
