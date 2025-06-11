import EditServicePage from '@/components/views/EditServicePage';
import { PAGES_META_DATA } from '@/constants/META_DATA';
export const metadata = {
  title: PAGES_META_DATA.editService,
};
const EditService = ({ params }) => {
  const decodedId = decodeURIComponent(params.id);
  return <EditServicePage id={decodedId} />;
};

export default EditService;
