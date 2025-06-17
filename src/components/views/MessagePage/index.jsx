'use client';

import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';
import BreadcrumbDashboard from '@/components/sections/BreadcrumbDashboard';
import SnackbarEdit from './components/Snackbar';
import { message } from '@/constants/message';
import messageFormSchema from '@/schemas/messageFormSchema';
import Form from './components/Form';

const MessagePage = () => {
  // object id in end points.
  const id = '68330e6e19d2bffaaeadd39e';

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { put, loading } = useAPI(
    `${END_POINTS.MESSAGE}/${id}`,
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
        <BreadcrumbDashboard breadcrumbHistory={message.breadcrumbHistory} />
        <Typography
          variant='h5'
          color='primary'
          sx={{ my: 3 }}>
          {message.title}
        </Typography>
      </Container>
      <Container maxWidth='sm'>
        <Form
          schema={messageFormSchema}
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

export default MessagePage