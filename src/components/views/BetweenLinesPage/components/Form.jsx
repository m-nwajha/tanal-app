'use client';
import ReusableForm from '@/components/sections/ReusableForm';
import { API_KEY } from '@/config/API';
import { betweenLines } from '@/constants/betweenLines';
import { END_POINTS } from '@/constants/END_POINTS';
import useAPI from '@/hooks/useAPI';
import { useEffect } from 'react';

const Form = ({ onSubmit, schema, loading }) => {
  const { data, get } = useAPI(END_POINTS.BETWEEN_LINES, API_KEY);
  useEffect(() => {
    get();
  }, []);
  return (
    <ReusableForm
      fields={betweenLines.formFields(data[0])}
      schema={schema}
      onSubmit={onSubmit}
      isLoading={loading}
      submitLabel='حفظ التعديلات'
    />
  );
};

export default Form;
