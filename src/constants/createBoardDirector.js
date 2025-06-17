import TitleIcon from '@mui/icons-material/Title';
import DescriptionIcon from '@mui/icons-material/Description';
export const createBoardDirector = {
  breadcrumbHistory: ['من نحن', 'مجلس الإدارة', 'إضافة عضو جديد'],
  title: 'إضافة عضو جديد في مجلس الإدارة',
  serviceFormFields: [
    {
      name: 'name',
      label: 'اسم العضو',
      type: 'text',
      icon: <TitleIcon />,
    },
    {
      name: 'jobTitle',
      label: 'المسمى الوظيفي',
      type: 'text',
      icon: <DescriptionIcon />,
    },
    {
      name: 'image',
      label: 'صورة العضو',
      type: 'file',
    },
  ],
};
