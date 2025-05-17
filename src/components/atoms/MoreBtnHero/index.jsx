// Import MUI Components.
import { Button, Skeleton } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

const MoreBtnHero = ({ moreBtn, loading }) => {
  return loading ? (
    <Skeleton
      sx={{ borderRadius: 2 }}
      width='165px'
      height='120px'
    />
  ) : (
    <Button
      href={moreBtn?.HERO?.btns?.more?.href}
      variant='contained'
      sx={{
        borderRadius: 2,
        color: 'secondary',
        px: 3,
        py: 2,
        fontSize: '1.1rem'
      }}
      endIcon={
        <ExpandMoreRoundedIcon
          fontSize='2rem'
          sx={{ mr: 1 }}
        />
      }>
      {moreBtn?.HERO?.btns?.more?.label}
    </Button>
  );
};

export default MoreBtnHero;
