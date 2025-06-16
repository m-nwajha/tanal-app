import * as Yup from 'yup';

const visionFormSchema = Yup.object().shape({
  description: Yup.string().required('نص الرؤية مطلوب'),
  image: Yup.mixed().required('الصورة مطلوبة'),
});

export default visionFormSchema;
