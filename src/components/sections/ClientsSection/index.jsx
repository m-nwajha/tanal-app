import { useEffect } from 'react';
import { Box, Container, Grid } from '@mui/material';
import SectionHeader from './components/SectionHeader';
import { CLIENTS } from '@/constants/CLIENTS';
import ClientItem from './components/ClientItem';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';

const ClientsSection = () => {
  // Use API.
  const { data, loading, get } = useAPI(END_POINTS.CLIENTS, API_KEY);

  // Use Effect.
  useEffect(() => {
    get();
  }, []);
  return (
    <Box
      id='clients'
      sx={{
        my: '4rem',
      }}>
      <Container>
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          spacing={3}>
          <Grid
            size={{ xs: 12, md: 4 }}
            alignSelf={{ xs: 'center' }}>
            <SectionHeader
              title={CLIENTS.title}
              description={CLIENTS.description}
            />
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            alignSelf={{ xs: 'center' }}>
            <ClientItem
              getData={data.slice(-6)}
              isLoading={loading}
             />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ClientsSection;
