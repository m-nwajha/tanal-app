import * as Yup from 'yup';

const whyTanalFormSchema = Yup.object().shape({
  title: Yup.string().required('العنوان مطلوب'),
  icon: Yup.string().required('نوع الأيقونة مطلوبة'),
  description: Yup.string().required('التفاصيل مطلوبة'),
});

export default whyTanalFormSchema;
