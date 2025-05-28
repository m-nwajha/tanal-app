import * as yup from 'yup';

export const contactSchema = yup.object().shape({
  name: yup.string().required('الاسم مطلوب'),
  email: yup.string().email('البريد غير صالح').required('البريد مطلوب'),
  subject: yup.string().required('الموضوع مطلوب'),
  message: yup.string().required('الرسالة مطلوبة'),
});
