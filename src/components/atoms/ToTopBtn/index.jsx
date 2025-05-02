'use client';
// Import MUI Components.
import { Tooltip } from '@mui/material';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

// Import style.
import { ToTopBtnStyled } from './style';
import useScroll from '@/hooks/useScroll';

const ToTopBtn = () => {
  const { heightScroll } = useScroll();
  return (
    heightScroll > 200 && (
      <Tooltip
        disableFocusListener
        title='الذهاب للأعلى'>
        <ToTopBtnStyled href='#'>
          <KeyboardArrowUpRoundedIcon fontSize='small' />
        </ToTopBtnStyled>
      </Tooltip>
    )
  );
};

export default ToTopBtn;
