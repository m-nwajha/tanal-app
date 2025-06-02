import Breadcrumb from '@/components/sections/Breadcrumb';
import { REQUEST } from '@/constants/REQUEST';
import FormSection from './sections/FormSection';

const RequestPage = () => {
  return (
    <>
      <Breadcrumb
        title={REQUEST.title}
        description={REQUEST.description}
        breadcrumbHistory={REQUEST.breadcrumbHistory}
      />
      <FormSection />
    </>
  );
};

export default RequestPage;
