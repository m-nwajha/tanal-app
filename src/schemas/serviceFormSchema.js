import * as Yup from 'yup';

const serviceFormSchema = Yup.object().shape({
  title: Yup.string().required('عنوان الخدمة مطلوب'),
  description: Yup.string().required('وصف الخدمة مطلوب'),
  image: Yup.mixed().required('الصورة مطلوبة'),
});

export default serviceFormSchema;
