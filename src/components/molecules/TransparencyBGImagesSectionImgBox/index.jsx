// Import Next.
import Image from 'next/image';

// import MUI Components.
import { Typography } from '@mui/material';

// Import style.
import { TitleStyled } from './style';

const TransparencyBGImagesSectionImgBox = ({
  loading,
  getDataAPI,
  getDataConstant
}) => {
  return (
    <TitleStyled>
      <div className='title_boxes'>
        <Typography
          variant='h5'
          component='h5'
          align='center'>
          {getDataConstant?.title}
        </Typography>
        <div className='piece_big'>
          {!loading && (
            <Image
              fill
              alt={getDataConstant?.title}
              src={getDataAPI?.betweenLines?.images?.img1}
            />
          )}
        </div>
        <div className='piece_top'>
          {!loading && (
            <Image
              fill
              alt={getDataConstant?.title}
              src={getDataAPI?.betweenLines?.images?.img2}
            />
          )}
        </div>
      </div>
    </TitleStyled>
  );
};

export default TransparencyBGImagesSectionImgBox;
