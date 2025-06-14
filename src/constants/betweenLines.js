import DescriptionIcon from '@mui/icons-material/Description';
export const betweenLines = {
  breadcrumbHistory: ['من نحن', 'بين السطور'],
  title: 'تعديل فقرة بين السطور',
  formFields: data => [
    {
      name: 'description',
      label: 'التعريف',
      value: data['description'] || '',
      type: 'text',
      icon: <DescriptionIcon />,
      multiline: true,
      rows: 4,
    }
  ],
};