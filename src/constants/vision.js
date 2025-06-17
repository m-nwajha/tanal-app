import DescriptionIcon from '@mui/icons-material/Description';
export const vision = {
  breadcrumbHistory: ['من نحن', 'الرؤية'],
  title: 'تعديل رؤية تنال',
  formFields: data => [
    {
      name: 'description',
      label: 'الرؤية',
      value: data?.description || '',
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