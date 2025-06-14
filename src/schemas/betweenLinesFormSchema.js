import * as Yup from 'yup';

const betweenLinesFormSchema = Yup.object().shape({
  description: Yup.string().required('الفقرة التعريفية مطلوبة'),
});

export default betweenLinesFormSchema;
