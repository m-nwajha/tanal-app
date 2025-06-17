import CreateGoalPage from '@/components/views/CreateGoalPage';
import { PAGES_META_DATA } from '@/constants/META_DATA';
export const metadata = {
  title: PAGES_META_DATA.goals,
};
const CreateGoal = () => <CreateGoalPage />;

export default CreateGoal;
