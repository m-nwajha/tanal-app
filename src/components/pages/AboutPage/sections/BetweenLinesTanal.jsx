'use client';
// Import Components.
import TransparencyBGImagesSection from '@/components/organisms/TransparencyBGImagesSection';

// Import Constants.
import { BETWEEN_LINES } from '@/constants/ABOUT';

const BetweenLinesTanal = ({ getDataAPI, loading }) => {
  return (
    <TransparencyBGImagesSection
      SectionTitle={BETWEEN_LINES.title}
      images={getDataAPI?.betweenLines?.images}
      textData={getDataAPI?.betweenLines?.description}
      listTitle={BETWEEN_LINES.whyTanal.listTitle}
      listData={getDataAPI?.betweenLines?.whyTanal}
      loading={loading}
    />
  );
};

export default BetweenLinesTanal;
