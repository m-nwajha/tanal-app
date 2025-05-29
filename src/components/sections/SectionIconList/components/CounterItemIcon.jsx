// Import MUI
import { Box, useTheme } from '@mui/material';

const CounterItemIcon = ({ icon }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        'position': 'relative',
        'borderRadius': '15px 0 15px 0',
        'transform': 'rotate(45deg)',
        'width': 100,
        'height': 100,
        'lineHeight': '100px',
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'border': `1px solid ${
          theme.palette.tertiary?.main || theme.palette.grey[400]
        }`,
        '&::after': {
          content: '""',
          backgroundColor:
            theme.palette.tertiary?.main || theme.palette.grey[400],
          width: '23px',
          height: '23px',
          borderRadius: '5px',
          position: 'absolute',
          top: '20px',
          left: '-10px',
        },
        '& > svg': {
          fontSize: '5rem',
          transform: 'rotate(-45deg)',
          color: theme.palette.tertiary?.main || theme.palette.grey[400],
        },
      }}>
      {icon}
    </Box>
  );
};

export default CounterItemIcon;
