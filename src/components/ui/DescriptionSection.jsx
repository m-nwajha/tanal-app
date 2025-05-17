// Import MUI Components
import { Typography, useTheme } from '@mui/material';

const DescriptionSection = ({ children, variant, type }) => {
  const theme = useTheme();
  return (
    <Typography
      align='center'
      color={type === 'light' ? 'secondary' : theme.palette.quinary?.main}
      variant={variant}
      sx={{
        fontFamily: theme.typography.IBM,
        fontWeight: 500,
      }}>
      {children}
    </Typography>
  );
};

export default DescriptionSection;
