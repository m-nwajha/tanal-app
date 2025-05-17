import { Typography, useTheme } from '@mui/material';
import bg from '@images/underline.png';

const HeadingSection = ({ variant, children, type, component }) => {
  const theme = useTheme();

  return (
    <Typography
      align='center'
      color={
        type === 'light'
          ? 'primary'
          : theme.palette.quinary?.main || 'text.primary'
      }
      component={component}
      variant={variant}
      sx={{
        '& > span': {
          'position': 'relative',
          'marginBottom': '3rem',
          'zIndex': 2,
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '90%',
            height: '30px',
            bottom: '-8px',
            right: '-10px',
            zIndex: -1,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${bg.src})`,
          },
        },
      }}>
      <span>{children}</span>
    </Typography>
  );
};

export default HeadingSection;
