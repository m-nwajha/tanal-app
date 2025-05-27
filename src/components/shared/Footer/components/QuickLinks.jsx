// Import Component.
import FooterMenu from './FooterMenu';

// Import Constants.
import { FOOTER } from '@/constants/FOOTER';

const QuickLinks = () => {
  return (
    <FooterMenu
      title={FOOTER.QUICK_LINKS.title}
      iconTitle={FOOTER.QUICK_LINKS.iconTitle}
      getData={FOOTER.QUICK_LINKS.menuItem}
    />
  );
};

export default QuickLinks;
