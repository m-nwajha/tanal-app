// Import NextJS.
import Link from 'next/link';

// Import MUI.
import { Typography } from '@mui/material';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

// Import Style.
import { MoreCardStyled } from './style';
import { CardBottom } from '../CardItem/style';

const MoreCard = ({moreHref}) => {
  return (
    <Link
      href={moreHref || '#'}
      style={{ position: 'relative' }}>
      <MoreCardStyled>
        <Typography
          className='card_title'
          variant='h6'>
          <span>مشاهدة الكل</span>
          <KeyboardBackspaceRoundedIcon fontSize='large' />
        </Typography>
      </MoreCardStyled>
      <CardBottom />
    </Link>
  );
};

export default MoreCard;
