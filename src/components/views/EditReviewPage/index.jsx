'use client';

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { Container, Typography } from '@mui/material';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';
import serviceFormSchema from '@/schemas/serviceFormSchema';
import ReusableForm from '@/components/sections/ReusableForm';
import { PATHS } from '@/constants/PATHS';
import BreadcrumbDashboard from '@/components/sections/BreadcrumbDashboard';
import SnackbarEdit from './components/Snackbar';
import { editReview } from '@/constants/editReview';
import reviewFormSchema from '@/schemas/reviewFormSchema';

const EditReviewPage = ({id}) => {
 const [openSnackbar, setOpenSnackbar] = useState(false);

  const { data, put, get, loading } = useAPI(
    `${END_POINTS.REVIEW}/${id}`,
    API_KEY
  );

  const handleSubmit = async data => {
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('jobTitle', data.jobTitle);
    formData.append('reviewText', data.reviewText);
    formData.append('image', data.image);

    try {
      const res = await put(formData, true);
    } catch (error) {
      console.error(error);
    } finally {
      setOpenSnackbar(true);
      setTimeout(() => {
        redirect([PATHS.DASHBOARD.REVIEWS.VIEW]);
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
          breadcrumbHistory={editReview.breadcrumbHistory}
        />
        <Typography
          variant='h5'
          color='primary'
          sx={{ my: 3 }}>
          {editReview.title}
        </Typography>
      </Container>
      <Container maxWidth='sm'>
        <ReusableForm
          fields={editReview.formFields(data)}
          schema={reviewFormSchema}
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
}

export default EditReviewPage