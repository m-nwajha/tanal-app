import UpdateProfilePage from '@/components/views/UpdateProfilePage';
import { PAGES_META_DATA } from '@/constants/META_DATA';

export const metadata = {
  title: PAGES_META_DATA.adminSettings,
};

const AdminSettings = () => <UpdateProfilePage />

export default AdminSettings