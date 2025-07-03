import * as Yup from 'yup';

const projectFormSchema = Yup.object().shape({
  title: Yup.string().required('عنوان المشروع مطلوب'),
  description: Yup.string().required('وصف المشروع مطلوب'),
  image: Yup.mixed().required('صورة المشروع مطلوبة'),
});

export default projectFormSchema;
