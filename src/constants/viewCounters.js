import { PATHS } from './PATHS';

export const viewCounters = {
  breadcrumbHistory: ['العدادات', 'عرض العدادات'],
  title: 'عرض العدادات',
  createBtn: {
    link: PATHS.DASHBOARD.COUNTERS.CREATE,
    label: 'إضافة عميل جديد',
  },
  tableHeader: [
    {
      id: 'icon',
      label: 'الايقونة',
    },
    {
      id: 'title',
      label: 'اسم العداد',
    },
    {
      id: 'amount',
      label: 'قيمة العداد',
    },
    {
      id: 'actions',
      label: 'الخيارات',
      actionsBtns: [
        {
          label: 'حذف',
          href: '',
        },
      ],
    },
  ],
};
