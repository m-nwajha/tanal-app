import MessagePage from '@/components/views/MessagePage';
import { PAGES_META_DATA } from '@/constants/META_DATA';

export const metadata = {
  title: PAGES_META_DATA.message,
};
const Message = () => <MessagePage />;
export default Message;
