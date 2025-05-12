import Image from 'next/image';
import { ImageStyled } from './style';

const SectionImagesItem = ({
  loading,
  imageURl,
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
      {!loading && imageURl && (
        <Image
          fill
          alt='about-img'
          src={imageURl}
        />
      )}
    </ImageStyled>
  );
};

export default SectionImagesItem;
