import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
export const editReview = {
  breadcrumbHistory: ['التقييمات', 'تعديل التقييم'],
  title: 'تعديل التقييم',
  formFields: data => [
    {
      name: 'name',
      label: 'اسم الشخص',
      value: data['name'] || '',
      type: 'text',
      icon: <PersonRoundedIcon />,
    },
    {
      name: 'jobTitle',
      label: 'المسمى الوظيفي',
      value: data['jobTitle'] || '',
      type: 'text',
      icon: <TitleIcon />,
    },
    {
      name: 'reviewText',
      label: 'التقييم',
      value: data['reviewText'] || '',
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
