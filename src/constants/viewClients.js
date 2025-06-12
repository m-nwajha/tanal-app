import { PATHS } from './PATHS';

export const viewClients = {
  breadcrumbHistory: ['شركاء النجاح', 'عرض العملاء'],
  title: 'عرض العملاء',
  createBtn: {
    link: PATHS.DASHBOARD.CLIENTS.CREATE,
    label: 'إضافة عميل جديد',
  },
  tableHeader: [
    {
      id: 'image',
      label: 'الصورة',
    },
    {
      id: 'title',
      label: 'اسم العميل',
    },
    {
      id: 'actions',
      label: 'الخيارات',
      actionsBtns: [
        {
          label: 'تعديل',
          hrefBase: PATHS.DASHBOARD.CLIENTS.EDIT,
        },
        {
          label: 'حذف',
          href: '',
        },
      ],
    },
  ],
};