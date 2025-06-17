import * as Yup from 'yup';

const boardDirectorFormSchema = Yup.object().shape({
  name: Yup.string().required('اسم العضو مطلوب'),
  jobTitle: Yup.string().required('المسمى الوظيفي مطلوب'),
  image: Yup.mixed().required('الصورة مطلوبة'),
});

export default boardDirectorFormSchema;
