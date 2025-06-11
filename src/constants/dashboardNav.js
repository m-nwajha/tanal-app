import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddCommentIcon from '@mui/icons-material/AddComment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import PublicIcon from '@mui/icons-material/Public';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShutterSpeedRoundedIcon from '@mui/icons-material/ShutterSpeedRounded';
import AddAlarmRoundedIcon from '@mui/icons-material/AddAlarmRounded';
import { PATHS } from './PATHS';

export const DASHBOARD_NAV = [
  {
    id: 1,
    label: 'الرئيسية',
    href: PATHS.DASHBOARD.HOME,
    icon: <DashboardIcon />,
    children: false,
  },
  {
    id: 2,
    label: 'الخدمات',
    icon: <HomeRepairServiceIcon />,
    children: [
      {
        id: 21,
        label: 'عرض الخدمات',
        href: PATHS.DASHBOARD.SERVICES.VIEW,
        icon: <AddBusinessIcon />,
      },
      {
        id: 22,
        label: 'إضافة خدمة',
        href: PATHS.DASHBOARD.SERVICES.CREATE,
        icon: <CreateNewFolderIcon />,
      },
    ],
  },
  {
    id: 3,
    label: 'المشاريع',
    icon: <FolderOpenIcon />,
    children: [
      {
        id: 31,
        label: 'عرض المشاريع',
        href: PATHS.DASHBOARD.PROJECTS.VIEW,
        icon: <FolderOpenIcon />,
      },
      {
        id: 32,
        label: 'إضافة مشروع',
        href: PATHS.DASHBOARD.PROJECTS.CREATE,
        icon: <CreateNewFolderIcon />,
      },
    ],
  },
  {
    id: 4,
    label: 'التقييمات',
    icon: <ReviewsIcon />,
    children: [
      {
        id: 41,
        label: 'عرض التقييمات',
        href: PATHS.DASHBOARD.REVIEWS.VIEW,
        icon: <ReviewsIcon />,
      },
      {
        id: 42,
        label: 'إضافة تقييم',
        href: PATHS.DASHBOARD.REVIEWS.CREATE,
        icon: <AddCommentIcon />,
      },
    ],
  },
  {
    id: 5,
    label: 'العدادات',
    icon: <ShutterSpeedRoundedIcon />,
    children: [
      {
        id: 51,
        label: 'عرض العدادات',
        href: PATHS.DASHBOARD.COUNTERS.VIEW,
        icon: <ShutterSpeedRoundedIcon />,
      },
      {
        id: 52,
        label: 'إضافة عداد',
        href: PATHS.DASHBOARD.COUNTERS.CREATE,
        icon: <AddAlarmRoundedIcon />,
      },
    ],
  },
  {
    id: 6,
    label: 'الطلبات',
    href: PATHS.DASHBOARD.REQUESTS,
    icon: <AssignmentTurnedInIcon />,
    children: false,
  },
  {
    id: 7,
    label: 'الرسائل',
    href: PATHS.DASHBOARD.MASSAGES,
    icon: <MarkEmailUnreadIcon />,
    children: false,
  },
  {
    id: 8,
    label: 'الإعدادات',
    icon: <SettingsIcon />,
    children: [
      {
        id: 81,
        label: 'من نحن',
        href: PATHS.DASHBOARD.SETTING.ABOUT,
        icon: <InfoIcon />,
      },
      {
        id: 82,
        label: 'إعدادات عامة',
        href: PATHS.DASHBOARD.SETTING.PUBLIC,
        icon: <PublicIcon />,
      },
      {
        id: 83,
        label: 'إعدادات المدير',
        href: PATHS.DASHBOARD.SETTING.ADMIN,
        icon: <AdminPanelSettingsIcon />,
      },
    ],
  },
];
