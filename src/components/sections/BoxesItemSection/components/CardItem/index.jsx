// Import NExtJS.
import Image from 'next/image';
import Link from 'next/link';

// Import MUI Components.
import { Typography } from '@mui/material';

// Import Style.
import { CardBottom, CardItemStyled } from './style';

const CardItem = ({ href, img, title, description }) => {
  // Define maxLength for description.
  const maxLength = 40;
  return (
    <Link
      href={href}
      style={{ position: 'relative' }}>
      <CardItemStyled>
        <Image
          fill
          src={img}
          alt={title}
        />
        <div className='box_text'>
          <Typography
            className='card_title'
            variant='h6'>
            <span>{title}</span>
          </Typography>
          <Typography
            className='card_p'
            variant='body1'>
            {
              // handle description length
              description.length > maxLength
                ? description.substring(0, maxLength) + '...'
                : description
            }
          </Typography>
        </div>
      </CardItemStyled>
      <CardBottom />
    </Link>
  );
};

export default CardItem;
