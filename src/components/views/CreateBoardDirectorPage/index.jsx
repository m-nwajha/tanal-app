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
import { createBoardDirector } from '@/constants/createBoardDirector';
import boardDirectorFormSchema from '@/schemas/boardDirectorFormSchema';

const CreateBoardDirectorPage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { post, loading } = useAPI(END_POINTS.BOARD_DIRECTORS, API_KEY);

  const handleSubmit = async data => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('jobTitle', data.jobTitle);
    formData.append('image', data.image);

    try {
      const res = await post(formData, true);
    } catch (error) {
      console.error(error);
    } finally {
      setOpenSnackbar(true);
      setTimeout(() => {
        redirect([PATHS.DASHBOARD.ABOUT.BOARD_DIRECTORS.VIEW]);
      }, 1500);
    }
  };

  return (
    <>
      <Container maxWidth='lg'>
        <BreadcrumbDashboard
          breadcrumbHistory={createBoardDirector.breadcrumbHistory}
        />
        <Typography
          variant='h5'
          color='primary'
          sx={{ my: 3 }}>
          {createBoardDirector.title}
        </Typography>
      </Container>
      <Container maxWidth='sm'>
        <ReusableForm
          fields={createBoardDirector.serviceFormFields}
          schema={boardDirectorFormSchema}
          onSubmit={handleSubmit}
          isLoading={loading}
          submitLabel='إضافة العضو'
        />
        <SnackbarCreate
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        />
      </Container>
    </>
  );
};

export default CreateBoardDirectorPage;
