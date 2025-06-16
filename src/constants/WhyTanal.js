import { PATHS } from './PATHS';

export const WhyTanal = {
  breadcrumbHistory: ['من نحن', 'لماذا نحن؟'],
  title: 'لماذا تنال؟',
  createBtn: {
    link: PATHS.DASHBOARD.ABOUT.WHY_TANAL.CREATE,
    label: 'اضافة عنصر جديد',
  },
  tableHeader: [
    {
      id: 'icon',
      label: 'الأيقونة',
    },
    {
      id: 'title',
      label: 'العنوان',
    },
    {
      id: 'description',
      label: 'التفاصيل',
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
