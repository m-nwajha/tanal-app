import Breadcrumb from '@/components/sections/Breadcrumb';
import { ABOUT_BREADCRUMB } from '@/constants/ABOUT';

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        title={ABOUT_BREADCRUMB.title}
        description={ABOUT_BREADCRUMB.description}
        breadcrumbHistory={ABOUT_BREADCRUMB.breadcrumbHistory}
      />
    </>
  );
};

export default AboutPage;
