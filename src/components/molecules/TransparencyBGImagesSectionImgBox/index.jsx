// Import Next.
import Image from 'next/image';

// import MUI Components.
import { Typography } from '@mui/material';

// Import style.
import { TitleStyled } from './style';

const TransparencyBGImagesSectionImgBox = ({ loading, images, title }) => {
  return (
    <TitleStyled>
      <div className='title_boxes'>
        <Typography
          variant='h5'
          component='h5'
          align='center'>
          {title}
        </Typography>
        <div className='piece_big'>
          {!loading && (
            <Image
              fill
              alt={title}
              src={images?.img1}
            />
          )}
        </div>
        <div className='piece_top'>
          {!loading && (
            <Image
              fill
              alt={title}
              src={images?.img2}
            />
          )}
        </div>
      </div>
    </TitleStyled>
  );
};

export default TransparencyBGImagesSectionImgBox;
