import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';

export const CREATE_PROJECT = {
  breadcrumbHistory: ['المشاريع', 'إضافة مشروع'],
  title: 'إضافة مشروع جديد',
  projectFormFields: [
    {
      name: 'title',
      label: 'عنوان المشروع',
      type: 'text',
      icon: <TitleIcon />,
    },
    {
      name: 'description',
      label: 'وصف المشروع',
      type: 'text',
      icon: <DescriptionIcon />,
      multiline: true,
      rows: 4,
    },
    {
      name: 'image',
      label: 'صورة المشروع',
      type: 'file',
    },
  ],
};
