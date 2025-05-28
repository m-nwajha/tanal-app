// Import Paths App.
import { PATHS } from './PATHS';

// Navbar as Array.
export const NAVBAR = [
  {
    id: 1,
    label: 'الرئيسية',
    href: PATHS.HOME,
  },
  {
    id: 2,
    label: 'عن تنال',
    href: PATHS.ABOUT,
  },
  {
    id: 3,
    label: 'خدماتنا',
    href: PATHS.SERVICES,
  },
  {
    id: 4,
    label: 'مشاريع تنال',
    href: PATHS.PROJECTS,
    children: true,
  },
  {
    id: 5,
    label: 'تواصل معنا',
    href: '#contact-us',
  },
];

export const NAV_BTN = {
  REQUEST: {
    href: PATHS.REQUEST,
    label: 'طلب اشتراك'
  }
};