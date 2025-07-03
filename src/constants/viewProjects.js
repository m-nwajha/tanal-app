import { PATHS } from './PATHS';

export const viewProjects = {
  breadcrumbHistory: ['المشاريع', 'عرض المشاريع'],
  title: 'عرض المشاريع',
  createBtn: {
    link: PATHS.DASHBOARD.PROJECTS.CREATE,
    label: 'إضافة مشروع جديد',
  },
  tableHeader: [
    {
      id: 'image',
      label: 'الصورة',
    },
    {
      id: 'title',
      label: 'اسم المشروع',
    },
    {
      id: 'description',
      label: 'الوصف',
    },
    {
      id: 'actions',
      label: 'الخيارات',
      actionsBtns: [
        {
          label: 'تعديل',
          hrefBase: PATHS.DASHBOARD.PROJECTS.EDIT,
        },
        {
          label: 'حذف',
          href: '',
        },
      ],
    },
  ],
};
