import * as Yup from 'yup';

const reviewFormSchema = Yup.object().shape({
  name: Yup.string().required('اسم الشخص مطلوب'),
  jobTitle: Yup.string().required('المسمى الوظيفي مطلوب'),
  reviewText: Yup.string().required('نص التقييم مطلوب'),
  image: Yup.mixed().required('الصورة مطلوبة'),
});

export default reviewFormSchema;