'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';
import { Container, Typography } from '@mui/material';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';
import projectFormSchema from '@/schemas/projectFormSchema';
import ReusableForm from '@/components/sections/ReusableForm';
import { CREATE_PROJECT } from '@/constants/createProject';
import { PATHS } from '@/constants/PATHS';
import BreadcrumbDashboard from '@/components/sections/BreadcrumbDashboard';
import SnackbarCreate from './components/Snackbar';

const CreateProjectsPage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { post, loading } = useAPI(END_POINTS.PROJECTS, API_KEY);

  const handleSubmit = async data => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('image', data.image);

    try {
      const res = await post(formData, true);
    } catch (error) {
      console.error(error);
    } finally {
      setOpenSnackbar(true);
      setTimeout(() => {
        redirect(PATHS.DASHBOARD.PROJECTS.VIEW);
      }, 1500);
    }
  };

  return (
    <>
      <Container maxWidth='lg'>
        <BreadcrumbDashboard
          breadcrumbHistory={CREATE_PROJECT.breadcrumbHistory}
        />
        <Typography
          variant='h5'
          color='primary'
          sx={{ my: 3 }}>
          {CREATE_PROJECT.title}
        </Typography>
      </Container>

      <Container maxWidth='sm'>
        <ReusableForm
          fields={CREATE_PROJECT.projectFormFields}
          schema={projectFormSchema}
          onSubmit={handleSubmit}
          isLoading={loading}
          submitLabel='إضافة المشروع'
        />
        <SnackbarCreate
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        />
      </Container>
    </>
  );
};

export default CreateProjectsPage;
