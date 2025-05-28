'use client';

// Import MUI Components
import { IconButton, Tooltip, useTheme } from '@mui/material';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

// Import Hooks
import useScroll from '@/hooks/useScroll';

const ToTopBtn = () => {
  const theme = useTheme();
  const { heightScroll } = useScroll();

  if (heightScroll <= 200) return null;

  return (
    <Tooltip
      disableFocusListener
      title='الذهاب للأعلى'>
      <IconButton
        href='#'
        sx={{
          'position': 'fixed',
          'bottom': '1rem',
          'right': '1rem',
          'zIndex': 999999,
          'display': 'flex',
          'justifyContent': 'center',
          'alignItems': 'center',
          'backgroundColor': theme.palette.secondary.main,
          'height': 34,
          'width': 34,
          'fontSize': '1rem',
          'color': theme.palette.quinary?.main || '#fff',
          'borderRadius': '12px',
          'transition': '0.7s',
          'cursor': 'pointer',
          'opacity': 0.4,
          'boxShadow':
            '0 0.125rem 0.125rem -0.125rem rgba(31, 27, 45, 0.08), 0 0.25rem 0.75rem rgba(31, 27, 45, 0.08)',
          'border': 0,
          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            opacity: 0.9,
          },
        }}>
        <KeyboardArrowUpRoundedIcon fontSize='small' />
      </IconButton>
    </Tooltip>
  );
};

export default ToTopBtn;
