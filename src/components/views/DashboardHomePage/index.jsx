import BreadcrumbDashboard from '@/components/sections/BreadcrumbDashboard';
import React from 'react';
import HelloAlert from './sections/HelloAlert';
import Container from '@mui/material/Container';

const DashboardHomePage = () => {
  return (
    <Container>
      <BreadcrumbDashboard />
      <HelloAlert />
    </Container>
  );
};

export default DashboardHomePage;
