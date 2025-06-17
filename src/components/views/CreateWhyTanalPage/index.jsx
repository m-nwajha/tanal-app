'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';
import { Container, Typography } from '@mui/material';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';
import ReusableForm from '@/components/sections/ReusableForm';
import { PATHS } from '@/constants/PATHS';
import BreadcrumbDashboard from '@/components/sections/BreadcrumbDashboard';
import SnackbarCreate from './components/Snackbar';
import { CreateWhyTanal } from '@/constants/CreateWhyTanal';
import whyTanalFormSchema from '@/schemas/whyTanalFormSchema';

const CreateWhyTanalPage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { post, loading } = useAPI(END_POINTS.WHY_TANAL, API_KEY);

  const handleSubmit = async data => {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('icon', data.icon);
    formData.append('description', data.description);

    try {
      const res = await post(formData);
    } catch (error) {
      console.error(error);
    } finally {
      setOpenSnackbar(true);
      setTimeout(() => {
        redirect([PATHS.DASHBOARD.ABOUT.WHY_TANAL.VIEW]);
      }, 1500);
    }
  };

  return (
    <>
      <Container maxWidth='lg'>
        <BreadcrumbDashboard
          breadcrumbHistory={CreateWhyTanal.breadcrumbHistory}
        />
        <Typography
          variant='h5'
          color='primary'
          sx={{ my: 3 }}>
          {CreateWhyTanal.title}
        </Typography>
      </Container>
      <Container maxWidth='sm'>
        <ReusableForm
          fields={CreateWhyTanal.formFields}
          schema={whyTanalFormSchema}
          onSubmit={handleSubmit}
          isLoading={loading}
          submitLabel='إضافة العنصر'
        />
        <SnackbarCreate
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        />
      </Container>
    </>
  );
};

export default CreateWhyTanalPage