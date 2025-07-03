'use client';
import BreadcrumbDashboard from '@/components/sections/BreadcrumbDashboard';
import { API_KEY } from '@/config/API';
import { END_POINTS } from '@/constants/END_POINTS';
import { viewRequests } from '@/constants/viewRequests';
import useAPI from '@/hooks/useAPI';
import { Container, Grid } from '@mui/material';
import TableReusable from '@/components/sections/TableReusable';
import { useEffect } from 'react';
import { useMediaQuery } from '@mui/material';

const ViewRequestsPage = () => {
  // Use API.
  const { data, get, del, loading } = useAPI(END_POINTS.REQUEST, API_KEY);
  // useEffect.
  useEffect(() => {
    get();
  }, []);

  const isLargeScreen = useMediaQuery('(min-width:899px)');

  const handleDelete = async id => {
    const res = await del(id);
    return res === true;
  };
  return (
    <Container maxWidth='lg'>
      <BreadcrumbDashboard breadcrumbHistory={viewRequests.breadcrumbHistory} />
      <div style={{ maxWidth: isLargeScreen && '1000px', overflowX: 'auto' }}>
        <Grid container>
          <TableReusable
            data={data}
            onDelete={handleDelete}
            constants={viewRequests}
            isLoading={loading}
            isExport={true}
          />
        </Grid>
      </div>
    </Container>
  );
};

export default ViewRequestsPage;
