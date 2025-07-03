import * as yup from 'yup';

export const requestSchema = yup.object().shape({
  fullName: yup.string().required('الاسم الكامل مطلوب'),
  email: yup
    .string()
    .email('صيغة البريد الإلكتروني غير صحيحة')
    .required('البريد الإلكتروني مطلوب'),
  mobile: yup
    .string()
    .matches(/^(\+?\d{7,15})$/, 'رقم الجوال غير صالح')
    .required('رقم الجوال مطلوب'),
  residenceCountry: yup.string().required('الدولة مطلوبة'),
  residenceCity: yup.string().required('المدينة مطلوبة'),

  howDidYouKnowUs: yup.string().nullable(),

  resumeFile: yup
    .mixed()
    .required('السيرة الذاتية مطلوبة')
    .test('fileSize', 'حجم الملف كبير جدًا', value => {
      return value && value.size <= 5 * 1024 * 1024; // 5MB
    })
    .test('fileType', 'صيغة الملف غير مدعومة', value => {
      return (
        value &&
        [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ].includes(value.type)
      );
    }),

  currentEmployer: yup.string().nullable(),
  currentPosition: yup.string().nullable(),

  linkedInProfile: yup.string().url('رابط LinkedIn غير صالح').nullable(),
  twitterProfile: yup.string().url('رابط Twitter غير صالح').nullable(),
  otherSocialMedia: yup.string().url('رابط غير صالح').nullable(),

  preferredContactMethod: yup
    .string()
    .oneOf(
      ['email', 'whatsapp', 'linkedin', 'other'],
      'طريقة التواصل غير صالحة'
    ),

  desiredProject: yup.string().nullable(),
  desiredServices: yup.string().nullable(),
  notes: yup.string().nullable(),
});
