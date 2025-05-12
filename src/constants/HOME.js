// Import Paths App.
import { PATHS } from './PATHS';

// Import Icons.
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import TagFacesRoundedIcon from '@mui/icons-material/TagFacesRounded';


export const HOME = {
  HERO: {
    title: 'شركة تنال',
    description: 'الأولى للإستثمار',
    btns: {
      more: {
        label: 'تعرف المزيد',
        href: PATHS.ABOUT
      }
    },
    images: {
      img1: '/assets/images/hero-img1.webp',
      img2: '/assets/images/hero-img2.webp',
      img3: '/assets/images/hero-img3.webp'
    }
  },
  COUNTERS: {
    title: 'تقهوة عند تنال',
    description: 'نجاحات تنال الأولى للاستثمار بالأرقام',
    icons: {
      client: <PeopleRoundedIcon />,
      employer: <BadgeRoundedIcon />,
      project: <AccountTreeRoundedIcon />,
      happy: <TagFacesRoundedIcon />
    }
  },
  ABOUT_US: {
    title: 'تنال بين السطور'
  }
};
