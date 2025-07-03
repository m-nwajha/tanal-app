'use client';

import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import BreadcrumbDashboard from '@/components/sections/BreadcrumbDashboard';
import { viewProjects } from '@/constants/viewProjects';
import TableReusable from '@/components/sections/TableReusable';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';

const ViewProjectsPage = () => {
  // Use API.
  const { data, get, del, loading } = useAPI(END_POINTS.PROJECTS, API_KEY);

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
      <BreadcrumbDashboard breadcrumbHistory={viewProjects.breadcrumbHistory} />
      <TableReusable
        data={data}
        onDelete={handleDelete}
        constants={viewProjects}
        isLoading={loading}
      />
    </Container>
  );
};

export default ViewProjectsPage;