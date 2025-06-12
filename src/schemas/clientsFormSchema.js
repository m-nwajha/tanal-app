import * as Yup from 'yup';

const clientsFormSchema = Yup.object().shape({
  title: Yup.string().required('اسم العميل مطلوب'),
  image: Yup.mixed().required('الصورة مطلوبة'),
});

export default clientsFormSchema;
