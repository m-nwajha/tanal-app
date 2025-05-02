import { PATHS } from './PATHS';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import ShareRoundedIcon from "@mui/icons-material/ShareRounded"

export const FOOTER = {
  TITLE: 'تنال الأولى للاستثمار',
  READ_MORE: 'قراءة المزيد',
  COPYRIGHT: 'جميع الحقوق محفوظة',
  QUICK_LINKS: {
    title: 'روابط مهمة',
    iconTitle: <LinkRoundedIcon />,
    menuItem: [
      {
        id: 1,
        label: 'عن تنال',
        href: PATHS.ABOUT
      },
      {
        id: 2,
        label: 'خدماتنا',
        href: PATHS.SERVICES
      },
      {
        id: 3,
        label: 'سياسة الخصوصية',
        href: '#'
      },
      {
        id: 4,
        label: 'الأحكام والشروط',
        href: '#'
      }
    ]
  },
  PROJECTS: {
    title: 'مشاريع تنال',
    iconTitle: <ChecklistRoundedIcon />
  },
  SOCIAL_MEDIA: {
    title: 'تابعونا عبر',
    iconTitle: <ShareRoundedIcon />
  }
};
