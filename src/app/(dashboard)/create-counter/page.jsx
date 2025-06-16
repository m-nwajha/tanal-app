import CreateCounterPage from '@/components/views/CreateCounterPage';
import { PAGES_META_DATA } from '@/constants/META_DATA';

export const metadata = {
  title: PAGES_META_DATA.createCounter,
};

const CreateCounter = () => <CreateCounterPage />

export default CreateCounter