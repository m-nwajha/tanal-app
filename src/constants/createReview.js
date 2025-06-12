import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
export const createReview = {
  breadcrumbHistory: ['التقييمات', 'إضافة تقييم'],
  title: 'إضافة تقييم جديد',
  formFields: [
    {
      name: 'name',
      label: 'اسم الشخص',
      type: 'text',
      icon: <PersonRoundedIcon />,
    },
    {
      name: 'jobTitle',
      label: 'المسمى الوظيفي',
      type: 'text',
      icon: <TitleIcon />,
    },
    {
      name: 'reviewText',
      label: 'التقييم',
      type: 'text',
      icon: <DescriptionIcon />,
      multiline: true,
      rows: 4,
    },
    {
      name: 'image',
      label: 'الصورة',
      type: 'file',
    },
  ],
};
