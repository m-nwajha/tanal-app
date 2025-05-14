import AboutImgItem from '@/components/atoms/AboutImgItem';

const AboutImages = ({ loading  }) => {
  return (
    <>
      <AboutImgItem
      loading={loading}
        top={-30}
        right={100}
        widthBox={30}
        heightBox={30}
      />
      <AboutImgItem
      loading={loading}
        top={-10}
        right={300}
        widthBox={180}
        heightBox={180}
        imageURl='/assets/images/about-img1.webp'
      />
      <AboutImgItem
      loading={loading}
        top={130}
        right={50}
        widthBox={130}
        heightBox={130}
        imageURl='/assets/images/about-img2.webp'
      />
      <AboutImgItem
      loading={loading}
        bottom={-60}
        right={230}
        widthBox={210}
        heightBox={210}
        imageURl='/assets/images/about-img3.webp'
      />
      <AboutImgItem
      loading={loading}
        bottom={-30}
        left={100}
        widthBox={30}
        heightBox={30}
      />
    </>
  );
};

export default AboutImages;
