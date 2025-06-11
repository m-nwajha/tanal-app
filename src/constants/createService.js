import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
export const CREATE_SERVICE = {
  breadcrumbHistory: ['الخدمات', 'إضافة خدمة'],
  title: 'إضافة خدمة جديدة',
  serviceFormFields: [
    {
      name: 'title',
      label: 'عنوان الخدمة',
      type: 'text',
      icon: <TitleIcon />,
    },
    {
      name: 'description',
      label: 'وصف الخدمة',
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
