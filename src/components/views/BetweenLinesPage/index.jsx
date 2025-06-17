'use client';

import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';
import BreadcrumbDashboard from '@/components/sections/BreadcrumbDashboard';
import SnackbarEdit from './components/Snackbar';
import betweenLinesFormSchema from '@/schemas/betweenLinesFormSchema';
import { betweenLines } from '@/constants/betweenLines';
import Form from './components/Form';

const BetweenLinesPage = () => {
  // object id in end points.
  const id = '683460f85eac98246d3e163a';

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { put, loading } = useAPI(
    `${END_POINTS.BETWEEN_LINES}/${id}`,
    API_KEY
  );

  const handleSubmit = async data => {
    const formData = new FormData();

    formData.append('description', data.description);

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
        <BreadcrumbDashboard
          breadcrumbHistory={betweenLines.breadcrumbHistory}
        />
        <Typography
          variant='h5'
          color='primary'
          sx={{ my: 3 }}>
          {betweenLines.title}
        </Typography>
      </Container>
      <Container maxWidth='sm'>
        <Form
          schema={betweenLinesFormSchema}
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

export default BetweenLinesPage;
