import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';

export const EDIT_PROJECT = {
  breadcrumbHistory: title => ['المشاريع', `تعديل مشروع ${title || ''}`],
  title: title => `تعديل مشروع ${title || ''}`,
  projectFormFields: data => [
    {
      name: 'title',
      label: 'عنوان المشروع',
      type: 'text',
      value: data?.title || '',
      icon: <TitleIcon />,
    },
    {
      name: 'description',
      label: 'وصف المشروع',
      type: 'text',
      value: data?.description || '',
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
