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
import { createGoal } from '@/constants/createGoal';
import goalsFormSchema from '@/schemas/goalsFormSchema';

const CreateGoalPage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { post, loading } = useAPI(END_POINTS.GOALS, API_KEY);

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
        redirect([PATHS.DASHBOARD.ABOUT.GOALS.VIEW]);
      }, 1500);
    }
  };

  return (
    <>
      <Container maxWidth='lg'>
        <BreadcrumbDashboard breadcrumbHistory={createGoal.breadcrumbHistory} />
        <Typography
          variant='h5'
          color='primary'
          sx={{ my: 3 }}>
          {createGoal.title}
        </Typography>
      </Container>
      <Container maxWidth='sm'>
        <ReusableForm
          fields={createGoal.formFields}
          schema={goalsFormSchema}
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

export default CreateGoalPage;
