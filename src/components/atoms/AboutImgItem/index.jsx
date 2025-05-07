import Image from 'next/image';
import { AboutImgStyled } from './style';

const AboutImgItem = ({
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
    <AboutImgStyled
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
    </AboutImgStyled>
  );
};

export default AboutImgItem;
