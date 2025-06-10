'use client';
import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import BreadcrumbDashboard from '@/components/sections/BreadcrumbDashboard';
import { viewServices } from '@/constants/viewServices';
import TableReusable from '@/components/sections/TableReusable';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';

const ViewServicesPage = () => {
  // Use API.
  const { data, get, del, loading } = useAPI(END_POINTS.SERVICES, API_KEY);
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
      <BreadcrumbDashboard breadcrumbHistory={viewServices.breadcrumbHistory} />
      <TableReusable
        data={data}
        onDelete={handleDelete}
        constants={viewServices}
        isLoading={loading}
      />
    </Container>
  );
};

export default ViewServicesPage;
