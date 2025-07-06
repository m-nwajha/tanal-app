// import Paths app.
import { PATHS } from './PATHS';

// Import icons from Material UI.
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import TagFacesRoundedIcon from '@mui/icons-material/TagFacesRounded';

export const ABOUT_BREADCRUMB = {
  title: 'عن تنال',
  description:
    'تنال الأولى للاستثمار... شغف بالفرص، التزام بالنجاح، ورؤية تُلهم مستقبل الاستثمار.',
  breadcrumbHistory: ['عن تنال'],
};

export const BETWEEN_LINES = {
  title: 'تنال بين السطور',
  title2: 'تعريف تنال الأولى للاستثمار',
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
};
export const WHY_TANAL = {
  title: 'لماذا تنال؟',
  description:
    'لأننا في تنال نعمل بشغف، نخطط بدقة، وننفّذ باحتراف. نمنحك الثقة، الخبرة، والرؤية التي تستحقها لتنطلق باستثماراتك نحو المستقبل',
  icons: {
    client: <PeopleRoundedIcon />,
    employer: <BadgeRoundedIcon />,
    project: <AccountTreeRoundedIcon />,
    happy: <TagFacesRoundedIcon />,
  },
};

export const GOALS = {
  title: 'أهداف تنال',
  description:
    'في تنال، نرسم أهدافنا برؤية واضحة تستند إلى الابتكار، وتعزيز الاقتصاد الوطني، وبناء شراكات مستدامة تُحدث فرقاً حقيقياً في عالم الاستثمار',
};
