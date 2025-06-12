'use client';
import React, { useEffect } from 'react';
import Container from '@mui/material/Container';
import BreadcrumbDashboard from '@/components/sections/BreadcrumbDashboard';
import { viewReviews } from '@/constants/viewReviews';
import TableReusable from '@/components/sections/TableReusable';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';
import { viewReviewsMock } from '@/mock/viewReviewsMock';

const ViewReviewsPage = () => {
  // Use API.
  const { data, get, del, loading } = useAPI(END_POINTS.REVIEW, API_KEY);
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
      <BreadcrumbDashboard breadcrumbHistory={viewReviews.breadcrumbHistory} />
      <TableReusable
        data={viewReviewsMock}
        onDelete={handleDelete}
        constants={viewReviews}
        isLoading={true}
      />
    </Container>
  );
}

export default ViewReviewsPage