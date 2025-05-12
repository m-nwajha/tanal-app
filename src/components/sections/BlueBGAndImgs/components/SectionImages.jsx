import SectionImagesItem from './SectionImagesItem';

const AboutImages = ({ loading , imagesList }) => {
  return (
    imagesList?.map((imgItem)=>{
      return(
        <SectionImagesItem
          key={imgItem.id}
          loading={loading}
          top={imgItem.top}
          right={imgItem.right}
          left={imgItem.left}
          bottom={imgItem.bottom}
          widthBox={imgItem.width}
          heightBox={imgItem.height}
          imageURl={imgItem.src}
        />
      )
    })
  );
};

export default AboutImages;
