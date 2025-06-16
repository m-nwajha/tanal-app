import DescriptionIcon from '@mui/icons-material/Description';
export const message = {
  breadcrumbHistory: ['من نحن', 'الرسالة'],
  title: 'تعديل رسالة تنال',
  formFields: data => [
    {
      name: 'description',
      label: 'الرسالة',
      value: data['description'] || '',
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