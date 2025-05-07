import { Typography } from '@mui/material';

const HeadingCard = ({ children, type, variant }) => {
  return (
    <Typography
      sx={{ color: type === 'light' ? 'black' : '' , fontWeight:'600' }}
      variant={variant}>
      {children}
    </Typography>
  );
};

export default HeadingCard;
