import TitleIcon from '@mui/icons-material/Title';
export const createClients = {
  breadcrumbHistory: ['شركاء النجاح', 'إضافة عميل'],
  title: 'إضافة عميل جديد',
  formFields: [
    {
      name: 'title',
      label: 'اسم العميل',
      type: 'text',
      icon: <TitleIcon />,
    },
    {
      name: 'image',
      label: 'صورة العميل',
      type: 'file',
    },
  ],
};
