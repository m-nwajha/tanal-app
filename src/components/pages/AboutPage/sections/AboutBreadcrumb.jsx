// Import Components.
import Breadcrumb from '@/components/organisms/Breadcrumb';

// Import Constants.
import { ABOUT_BREADCRUMB } from '@/constants/ABOUT';

const AboutBreadcrumb = ({ getDataAPI, loading }) => {
  return (
    <Breadcrumb
      getDataAPI={getDataAPI}
      getDataConstant={ABOUT_BREADCRUMB}
      loading={loading}
    />
  );
};

export default AboutBreadcrumb