import OurProjectItem from '@/components/views/OurProjectItem';
import { PAGES_META_DATA } from '@/constants/META_DATA';
export const metadata = {
  title: PAGES_META_DATA.OurProjects,
};
const OurProjects = ({ params }) => {
  const decodedId = decodeURIComponent(params.id);
  return <OurProjectItem getParams={decodedId} />;
};

export default OurProjects;
