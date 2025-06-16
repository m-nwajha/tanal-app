import ViewCountersPage from '@/components/views/ViewCountersPage';
import { PAGES_META_DATA } from '@/constants/META_DATA';

export const metadata = {
  title: PAGES_META_DATA.viewCounters,
};
const ViewCounters = () => <ViewCountersPage />;

export default ViewCounters;
