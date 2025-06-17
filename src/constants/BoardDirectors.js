import { PATHS } from './PATHS';

export const BoardDirectors = {
  breadcrumbHistory: ['من نحن', 'مجلس الإدارة'],
  title: 'مجلس الإدارة',
  createBtn:{
    link: PATHS.DASHBOARD.ABOUT.BOARD_DIRECTORS.CREATE,
    label: 'اضافة عضو جديد'
  },
  tableHeader: [
    {
      id: 'image',
      label: 'الصورة',
    },
    {
      id: 'name',
      label: 'الاسم',
    },
    {
      id: 'jobTitle',
      label: 'المسمى الوظيفي',
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