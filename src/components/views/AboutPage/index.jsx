import Breadcrumb from '@/components/sections/Breadcrumb';
import { ABOUT_BREADCRUMB } from '@/constants/ABOUT';
import BetweenLines from './sections/BetweenLines';
import WhyTanal from './sections/WhyTanal';
import Vision from './sections/Vision';
import BoardDirectors from './sections/BoardDirectors';
import Message from './sections/Message';
import Goals from './sections/Goals';

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
      <Message />
      <Goals />
      <BoardDirectors />
    </>
  );
};

export default AboutPage;
