import { PATHS } from './PATHS';

export const goals = {
  breadcrumbHistory: ['من نحن', 'الأهداف'],
  title: 'أهداف تنال',
  createBtn: {
    link: PATHS.DASHBOARD.ABOUT.GOALS.CREATE,
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
