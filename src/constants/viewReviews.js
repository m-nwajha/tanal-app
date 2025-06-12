import { PATHS } from './PATHS';

export const viewReviews = {
  breadcrumbHistory: ['التقييمات', 'عرض التقيمات'],
  title: 'عرض التقييمات',
  createBtn: {
    link: PATHS.DASHBOARD.REVIEWS.CREATE,
    label: 'إضافة تقييم جديد',
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
      id: 'reviewText',
      label: 'التقييم',
    },
    {
      id: 'actions',
      label: 'الخيارات',
      actionsBtns: [
        {
          label: 'تعديل',
          hrefBase: PATHS.DASHBOARD.REVIEWS.EDIT,
        },
        {
          label: 'حذف',
          href: '',
        },
      ],
    },
  ],
};