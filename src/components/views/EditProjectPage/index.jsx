'use client';

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { Container, Typography } from '@mui/material';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';
import projectFormSchema from '@/schemas/projectFormSchema';
import ReusableForm from '@/components/sections/ReusableForm';
import { PATHS } from '@/constants/PATHS';
import BreadcrumbDashboard from '@/components/sections/BreadcrumbDashboard';
import SnackbarEdit from './components/Snackbar';
import { EDIT_PROJECT } from '@/constants/editProject';

const EditProjectPage = ({ id }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { data, put, get, loading } = useAPI(
    `${END_POINTS.PROJECTS}/${id}`,
    API_KEY
  );

  const handleSubmit = async data => {
    const formData = new FormData();

    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('image', data.image);

    try {
      await put(formData, true);
    } catch (error) {
      console.error(error);
    } finally {
      setOpenSnackbar(true);
      setTimeout(() => {
        redirect(PATHS.DASHBOARD.PROJECTS.VIEW);
      }, 1500);
    }
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      <Container maxWidth='lg'>
        <BreadcrumbDashboard
          breadcrumbHistory={EDIT_PROJECT.breadcrumbHistory(data?.title)}
        />
        <Typography
          variant='h5'
          color='primary'
          sx={{ my: 3 }}>
          {EDIT_PROJECT.title(data?.title)}
        </Typography>
      </Container>
      <Container maxWidth='sm'>
        <ReusableForm
          fields={EDIT_PROJECT.projectFormFields(data)}
          schema={projectFormSchema}
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

export default EditProjectPage;
