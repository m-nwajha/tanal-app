import TitleIcon from '@mui/icons-material/Title';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import { ICONS } from './ICONS';

export const createCounter = {
  breadcrumbHistory: ['العدادات', 'إضافة عداد'],
  title: 'إضافة عداد جديد',
  formFields: [
    {
      name: 'title',
      label: 'اسم العداد',
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
      name: 'amount',
      label: 'القيمة',
      type: 'number',
      icon: <PlusOneIcon />,
    },
  ],
};
