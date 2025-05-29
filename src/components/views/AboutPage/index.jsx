import Breadcrumb from '@/components/sections/Breadcrumb';
import { ABOUT_BREADCRUMB } from '@/constants/ABOUT';
import BetweenLines from './sections/BetweenLines';
import WhyTanal from './sections/WhyTanal';
import Vision from './sections/Vision';

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        title={ABOUT_BREADCRUMB.title}
        description={ABOUT_BREADCRUMB.description}
        breadcrumbHistory={ABOUT_BREADCRUMB.breadcrumbHistory}
      />
      <BetweenLines />
      <WhyTanal />
      <Vision />
      <div
        style={{
          height: '100vh',
        }}></div>
    </>
  );
};

export default AboutPage;
