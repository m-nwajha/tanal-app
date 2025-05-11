// Import Next Hooks & Components.
import Image from 'next/image';

// Import MUI Components.
import { Typography } from '@mui/material';

// Import Style.
import { ImageStyled } from './style';

const TransparencyBGImagesSectionImgBoxItem = ({
  loading,
  imageURl,
  text,
  widthBox,
  heightBox,
  top,
  right,
  left,
  bottom
}) => {
  return (
    <ImageStyled
      widthBox={widthBox}
      heightBox={heightBox}
      top={top}
      right={right}
      left={left}
      bottom={bottom}>
      {!loading && imageURl ? (
        <Image
          fill
          alt='about-img'
          src={imageURl}
        />
      ) : text ? (
        <Typography variant='h6'>{text}</Typography>
      ) : (
        ''
      )}
    </ImageStyled>
  );
};

export default TransparencyBGImagesSectionImgBoxItem