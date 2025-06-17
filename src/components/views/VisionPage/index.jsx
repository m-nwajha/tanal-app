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
import Form from './components/Form';

const VisionPage = () => {
  // object id in end points.
  const id = '68330b98e1c26a364b34832a';

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { put, loading } = useAPI(
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
        <Form
          schema={visionFormSchema}
          onSubmit={handleSubmit}
          isLoading={loading}
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