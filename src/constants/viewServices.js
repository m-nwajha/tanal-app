import { PATHS } from './PATHS';

export const viewServices = {
  breadcrumbHistory: ['الخدمات', 'عرض الخدمات'],
  title: 'عرض الخدمات',
  createBtn:{
    link: PATHS.DASHBOARD.SERVICES.CREATE,
    label: 'اضافة خدمة جديدة'
  },
  tableHeader: [
    {
      id: 'image',
      label: 'الصورة',
    },
    {
      id: 'title',
      label: 'اسم الخدمة',
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
          label: 'تعديل',
          hrefBase: PATHS.DASHBOARD.SERVICES.EDIT,
        },
        {
          label: 'حذف',
          href: '',
        },
      ],
    },
  ],
};