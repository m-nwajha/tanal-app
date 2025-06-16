'use client';

import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';
import ReusableForm from '@/components/sections/ReusableForm';
import BreadcrumbDashboard from '@/components/sections/BreadcrumbDashboard';
import SnackbarEdit from './components/Snackbar';
import { vision } from '@/constants/vision';
import visionFormSchema from '@/schemas/visionFormSchema';

const VisionPage = () => {
  // object id in end points.
  const id = 52542;

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { data, put, get, loading } = useAPI(
    `${END_POINTS.VISION}/${id}`,
    API_KEY
  );

  const handleSubmit = async data => {
    const formData = new FormData();

    formData.append('description', data.description);
    formData.append('image', data.image);

    try {
      const res = await put(formData, true);
    } catch (error) {
      console.error(error);
    } finally {
      setOpenSnackbar(true);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      <Container maxWidth='lg'>
        <BreadcrumbDashboard breadcrumbHistory={vision.breadcrumbHistory} />
        <Typography
          variant='h5'
          color='primary'
          sx={{ my: 3 }}>
          {vision.title}
        </Typography>
      </Container>
      <Container maxWidth='sm'>
        <ReusableForm
          fields={vision.formFields(data)}
          schema={visionFormSchema}
          onSubmit={handleSubmit}
          isLoading={loading}
          submitLabel='حفظ التعديلات'
        />
        <SnackbarEdit
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        />
      </Container>
    </>
  );
};
export default VisionPage