// Import Style.
import { StyledHeroImg } from './style';

const HeroImgItem = ({ src, loading }) => {
  return (
    !loading && (
      <StyledHeroImg
        height='289'
        width='390'
        src={src}
        alt='hero-img'
      />
    )
  );
};

export default HeroImgItem;
