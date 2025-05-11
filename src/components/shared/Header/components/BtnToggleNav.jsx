// Import MUI Components.
import { IconButton, Tooltip, useTheme } from '@mui/material';
import DragHandleRoundedIcon from '@mui/icons-material/DragHandleRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const BtnToggleNav = ({ onClick, navFixed, type }) => {
  // use Theme.
  const { colors } = useTheme();

  // Destructure Theme Color.
  const { primary, quinary } = colors;

  return (
    <IconButton
      onClick={onClick}
      sx={{
        display: { xs: 'flex', lg: 'none' },
        alignItems: 'center',
        color: !navFixed > 0 ? quinary : primary
      }}
      size='large'>
      <Tooltip
        disableFocusListener
        title={type === 'open' ? 'القائمة' : 'اغلاق القائمة'}>
        {type === 'open' ? (
          <DragHandleRoundedIcon fontSize='inherit' />
        ) : (
          <CloseRoundedIcon fontSize='inherit' />
        )}
      </Tooltip>
    </IconButton>
  );
};

export default BtnToggleNav;
