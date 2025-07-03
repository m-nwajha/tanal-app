import EditProjectPage from '@/components/views/EditProjectPage';
import { PAGES_META_DATA } from '@/constants/META_DATA';
export const metadata = {
  title: PAGES_META_DATA.editProject,
};

const EditProject = ({ params }) => {
  const decodedId = decodeURIComponent(params.id);
  return <EditProjectPage id={decodedId} />;
};

export default EditProject