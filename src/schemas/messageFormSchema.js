import * as Yup from 'yup';

const messageFormSchema = Yup.object().shape({
  description: Yup.string().required('نص الرسالة مطلوب'),
  image: Yup.mixed().required('الصورة مطلوبة'),
});

export default messageFormSchema;
