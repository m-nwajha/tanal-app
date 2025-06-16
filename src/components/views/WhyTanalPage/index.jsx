'use client';
import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import BreadcrumbDashboard from '@/components/sections/BreadcrumbDashboard';
import TableReusable from '@/components/sections/TableReusable';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';
import { WhyTanal } from '@/constants/WhyTanal';

const WhyTanalPage = () => {
  // Use API.
  const { data, get, del, loading } = useAPI(END_POINTS.WHY_TANAL, API_KEY);
  // useEffect.
  useEffect(() => {
    get();
  }, []);

  const handleDelete = async id => {
    const res = await del(id);
    return res === true;
  };
  return (
    <Container maxWidth='lg'>
      <BreadcrumbDashboard breadcrumbHistory={WhyTanal.breadcrumbHistory} />
      <TableReusable
        data={data}
        onDelete={handleDelete}
        constants={WhyTanal}
        isLoading={loading}
      />
    </Container>
  );
};

export default WhyTanalPage