import ViewClientsPage from '@/components/views/ViewClientsPage';
import { PAGES_META_DATA } from '@/constants/META_DATA';

export const metadata = {
  title: PAGES_META_DATA.viewClients,
};

const ViewClients = () => {
  return <ViewClientsPage />
};

export default ViewClients;
