export const CONTACT = {
  title: 'التواصل معنا',
  TextFields: [
    {
      name: 'name',
      label: 'اسم الكريم',
      type: 'text',
      multiline: false,
    },
    {
      name: 'email',
      label: 'البريد الإلكتروني',
      type: 'email',
      multiline: false,
    },
    {
      name: 'subject',
      label: 'الموضوع',
      type: 'text',
      multiline: false,
      sx: { mt: 2 },
    },
    {
      name: 'message',
      label: 'الرسالة',
      type: 'text',
      multiline: true,
      rows: 5,
      sx: { mt: 2 },
    },
  ],
};
