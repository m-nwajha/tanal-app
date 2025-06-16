import * as Yup from 'yup';

const countersFormSchema = Yup.object().shape({
  title: Yup.string().required('اسم العداد مطلوب'),
  icon: Yup.string().required('نوع الأيقونة مطلوب'),
  amount: Yup.number()
    .required('القيمة مطلوبة')
    .typeError('يجب أن تكون القيمة رقمًا')
    .min(1, 'يجب أن تكون القيمة أكبر من أو تساوي 1')
    .max(9000, 'يجب أن تكون القيمة أقل من أو تساوي 9000'),
});

export default countersFormSchema;
