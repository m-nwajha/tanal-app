import CreateClientPage from '@/components/views/CreateClientPage';
import { PAGES_META_DATA } from '@/constants/META_DATA';

export const metadata = {
  title: PAGES_META_DATA.createClient,
};
const CreateClient = () => <CreateClientPage />;

export default CreateClient;
