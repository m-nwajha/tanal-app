import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';

export const EDIT_SERVICE = {
  breadcrumbHistory: title => ['الخدمات', `تعديل خدمة ${title || ''}`],
  title: title => `تعديل خدمة ${title || ''}`,
  serviceFormFields: (data)=> [
    {
      name: 'title',
      label: 'عنوان الخدمة',
      type: 'text',
      value: data['title'] || '',
      icon: <TitleIcon />,
    },
    {
      name: 'description',
      label: 'وصف الخدمة',
      value: data['description'] || '',
      type: 'text',
      icon: <DescriptionIcon />,
      multiline: true,
      rows: 4,
    },
    {
      name: 'image',
      label: 'صورة الخدمة',
      type: 'file',
    },
  ],
};
