export const REQUEST = {
  title: 'طلب الاشتراك',
  description:
    'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى',
  breadcrumbHistory: ['طلب الاشتراك'],
  TextFields: [
    {
      name: 'name',
      label: 'الاسم بالكامل',
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
      name: 'email',
      label: 'رقم الجوال',
      type: 'tel',
      multiline: false,
    },
    {
      name: 'address',
      label: 'العنوان هنا',
      type: 'text',
      multiline: false,
    },
    {
      name: 'how',
      label: 'كيف عرفت عن عن شركة تنال؟',
      type: 'text',
      multiline: false,
    },
    {
      name: 'how',
      label: 'جهة العمل الحالية',
      type: 'text',
      multiline: false,
    },
    {
      name: 'how',
      label: '',
      type: 'text',
      multiline: false,
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
