// Import Next Components.
import Link from 'next/link';

// Import MUI Components.
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { Button, useTheme } from '@mui/material';

// Import Constants
import { NAV_BTN } from '@/constants/NAVBAR';

const NavBtn = ({ navFixed }) => {
  // Use Theme
  const { colors } = useTheme();
  return (
    <Button
      variant={navFixed > 0 ? 'contained' : 'outlined'}
      sx={{
        backgroundColor: !navFixed > 0 && colors.quinary,
        borderRadius: '10px'
      }}
      component={Link}
      endIcon={
        <AddToPhotosIcon
          sx={{
            mr: '0.4rem'
          }}
        />
      }
      href={NAV_BTN.REQUEST.href}>
      {NAV_BTN.REQUEST.label}
    </Button>
  );
};

export default NavBtn;
