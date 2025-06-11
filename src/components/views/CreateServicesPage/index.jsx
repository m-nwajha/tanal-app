'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Container, Typography } from '@mui/material';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';
import serviceFormSchema from '@/schemas/serviceFormSchema';
import ReusableForm from '@/components/sections/ReusableForm';
import { CREATE_SERVICE } from '@/constants/createService';
import { PATHS } from '@/constants/PATHS';
import BreadcrumbDashboard from '@/components/sections/BreadcrumbDashboard';

const CreateServicesPage = () => {
  const router = useRouter();
  const { post, loading } = useAPI(END_POINTS.SERVICES, API_KEY);

  const handleSubmit = async formData => {
    const payload = new FormData();
  
    payload.append('title', formData.title);
    payload.append('description', formData.description);
  
    if (formData.image && formData.image.length > 0) {
      payload.append('image', formData.image[0]); 
    }
  
    const res = await post(payload, true); 
  };
  
  return (
    <>
      <Container maxWidth='lg'>
        <BreadcrumbDashboard
          breadcrumbHistory={CREATE_SERVICE.breadcrumbHistory}
        />
        <Typography
          variant='h5'
          color='primary'
          sx={{ my: 3 }}>
          {CREATE_SERVICE.title}
        </Typography>
      </Container>
      <Container maxWidth='sm'>
        <ReusableForm
          fields={CREATE_SERVICE.serviceFormFields}
          schema={serviceFormSchema}
          onSubmit={handleSubmit}
          isLoading={loading}
          buttonLabel='إضافة الخدمة'
        />
      </Container>
    </>
  );
};

export default CreateServicesPage;
