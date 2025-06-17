'use client';
import ReusableForm from '@/components/sections/ReusableForm';
import { API_KEY } from '@/config/API';
import { message } from '@/constants/message';
import { END_POINTS } from '@/constants/END_POINTS';
import useAPI from '@/hooks/useAPI';
import { useEffect } from 'react';

const Form = ({ onSubmit, schema, loading }) => {
  const { data, get } = useAPI(END_POINTS.MESSAGE, API_KEY);
  useEffect(() => {
    get();
  }, []);
  return (
    <ReusableForm
      fields={message.formFields(data[0])}
      schema={schema}
      onSubmit={onSubmit}
      isLoading={loading}
      submitLabel='حفظ التعديلات'
    />
  );
};

export default Form;
