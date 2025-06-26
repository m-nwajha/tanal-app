'use client';
import BreadcrumbDashboard from '@/components/sections/BreadcrumbDashboard';
import { useCookies } from 'react-cookie';
import WelcomeHeader from './sections/WelcomeHeader';
import Container from '@mui/material/Container';
import StatusSection from './sections/StatusSection';
import QuickActionsSection from './sections/QuickActionsSection';
import ChartSection from './sections/ChartSection';
import Grid from '@mui/material/Grid';
import useAPI from '@/hooks/useAPI';
import { useEffect } from 'react';
import { API_KEY } from '@/config/API';
import { END_POINTS } from '@/constants/END_POINTS';

const DashboardHomePage = () => {
  const [cookies] = useCookies(['user']);
  const { data, loading, get } = useAPI(END_POINTS.REQUEST_STATUS, API_KEY);

  // Use Effect.
  useEffect(() => {
    get();
  }, []);

  return (
    <Container>
      <BreadcrumbDashboard />
      <WelcomeHeader userName={cookies.user} />
      <StatusSection />
      <Grid
        container
        alignItems='center'
        spacing={4}>
        <Grid
          item
          size={{ xs: 12, md: 6, lg: 4 }}>
          <QuickActionsSection />
        </Grid>
        <Grid
          item
          size={{ xs: 12, md: 6, lg: 8 }}>
          <ChartSection
            chartData={data}
            isLoading={loading}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardHomePage;
