import * as Yup from 'yup';
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('يرجى إدخال بريد إلكتروني صالح')
    .required('البريد الإلكتروني مطلوب'),
  password: Yup.string()
    .min(6, 'كلمة المرور يجب أن تتكون من 6 أحرف على الأقل')
    .required('كلمة المرور مطلوبة'),
});

export default loginSchema;
