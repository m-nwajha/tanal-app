import EditReviewPage from '@/components/views/EditReviewPage';
import { PAGES_META_DATA } from '@/constants/META_DATA';
export const metadata = {
  title: PAGES_META_DATA.editReview,
};
const EditReview = ({ params }) => {
  const decodedId = decodeURIComponent(params.id);
  return <EditReviewPage id={decodedId} />;
};

export default EditReview;
