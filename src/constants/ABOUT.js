// import Paths app.
import { PATHS } from './PATHS';

// Import icons from Material UI.
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';

export const ABOUT_BREADCRUMB = {
  title: 'عن تنال',
  description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى',
  breadcrumbHistory: ['عن تنال'],
};

export const BETWEEN_LINES = {
  title: 'تنال بين السطور',
  button: {
    label: 'تعرف المزيد',
    href: PATHS.ABOUT,
  },
  images: [
    {
      id: 1,
      top: -30,
      right: 100,
      width: 30,
      height: 30,
      src: false,
    },
    {
      id: 2,
      top: -10,
      right: 300,
      width: 180,
      height: 180,
      src: '/assets/images/about-img1.webp',
    },
    {
      id: 3,
      top: 130,
      right: 50,
      width: 130,
      height: 130,
      src: '/assets/images/about-img2.webp',
    },
    {
      id: 4,
      bottom: -60,
      right: 230,
      width: 210,
      height: 210,
      src: '/assets/images/about-img3.webp',
    },
    {
      id: 5,
      bottom: -30,
      left: 100,
      width: 30,
      height: 30,
      src: false,
    },
  ],
  whyTanal: {
    listTitle: { title: 'لماذا تنال؟', icon: <ContactSupportRoundedIcon /> },
    icon: {
      test: <BusinessCenterRoundedIcon />,
    },
  },
};
