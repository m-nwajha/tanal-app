import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
import { ICONS } from './ICONS';

export const createGoal = {
  breadcrumbHistory: ['من نحن', 'الأهداف', 'إضافة عنصر'],
  title: 'إضافة عنصر جديد',
  formFields: [
    {
      name: 'title',
      label: 'العنوان',
      type: 'text',
      icon: <TitleIcon />,
    },

    {
      name: 'icon',
      label: 'نوع الأيقونة',
      type: 'select',
      options: Object.entries(ICONS),
    },
    {
      name: 'description',
      label: 'التفاصيل',
      type: 'text',
      icon: <DescriptionIcon />,
      multiline: true,
      rows: 4,
    },
  ],
};
