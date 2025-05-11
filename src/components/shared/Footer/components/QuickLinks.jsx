// Import Component.
import FooterMenu from './FooterMenu';

// Import Constants.
import { FOOTER } from '@/constants/FOOTER';

const QuickLinks = ({ loading, getDataConstant }) => {
  return (
    <FooterMenu
      title={getDataConstant.QUICK_LINKS.title}
      iconTitle={getDataConstant.QUICK_LINKS.iconTitle}
      getData={getDataConstant.QUICK_LINKS.menuItem}
      loading={loading}
    />
  );
};

export default QuickLinks;
