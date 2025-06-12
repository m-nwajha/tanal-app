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
import { createReview } from '@/constants/createReview';
import reviewFormSchema from '@/schemas/reviewFormSchema';

const CreateReviewPage = () => {
 const [openSnackbar, setOpenSnackbar] = useState(false);

  const { post, loading } = useAPI(END_POINTS.REVIEW, API_KEY);

  const handleSubmit = async data => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('jobTitle', data.jobTitle);
    formData.append('reviewText', data.reviewText);
    formData.append('image', data.image);

    try {
      const res = await post(formData, true);
    } catch (error) {
      console.error(error);
    } finally {
      setOpenSnackbar(true);
      setTimeout(() => {
        redirect([PATHS.DASHBOARD.REVIEWS.VIEW]);
      }, 1500);
    }
  };

  return (
    <>
      <Container maxWidth='lg'>
        <BreadcrumbDashboard
          breadcrumbHistory={createReview.breadcrumbHistory}
        />
        <Typography
          variant='h5'
          color='primary'
          sx={{ my: 3 }}>
          {createReview.title}
        </Typography>
      </Container>
      <Container maxWidth='sm'>
        <ReusableForm
          fields={createReview.formFields}
          schema={reviewFormSchema}
          onSubmit={handleSubmit}
          isLoading={loading}
          submitLabel='إضافة التقييم'
        />
        <SnackbarCreate
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        />
      </Container>
    </>
  );
}

export default CreateReviewPage