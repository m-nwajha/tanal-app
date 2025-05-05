'use client';
// Import ReactJS.
import { useEffect } from 'react';

// Import MUI Components.
import { Container, Grid } from '@mui/material';

// Import Components.
import CountersSectionHeader from '@/components/molecules/CountersSectionHeader';
import CounterItem from '@/components/molecules/CounterItem';
import CounterItemSkeleton from '@/components/molecules/CounterItemSkeleton';

// Import Constants.
import { HOME } from '@/constants/HOME';
import { END_POINTS } from '@/constants/END_POINTS';

// Import Hooks.
import useAPI from '@/hooks/useAPI';

// Import Style.
import { CountersWrapperStyled } from './style';

const Counters = () => {
  const { get, data, loading } = useAPI(END_POINTS.HOME);

  useEffect(() => {
    get();
  }, []);
  return (
    <CountersWrapperStyled id='counters'>
      <Container maxWidth='lg'>
        {/** Counter Section Header */}
        <CountersSectionHeader getData={HOME.COUNTERS} />

        {/** Counter Items */}
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          spacing={6}>
          {loading
            ? Object.entries(HOME.COUNTERS.icons).map(([key]) => {
                return (
                  <Grid
                    mt={9}
                    item
                    size={{ sm: 5, xs: 11 }}
                    alignSelf='center'
                    key={key}>
                    <CounterItemSkeleton />
                  </Grid>
                );
              })
            : data?.counters?.map(counterItem => {
                return (
                  <Grid
                    mt={9}
                    item
                    size={{ sm: 5, xs: 11 }}
                    alignSelf='center'
                    key={counterItem.id}>
                    <CounterItem
                      getData={counterItem}
                      icon={HOME.COUNTERS.icons[counterItem.title]}
                      loading={loading}
                    />
                  </Grid>
                );
              })}
        </Grid>
      </Container>
    </CountersWrapperStyled>
  );
};

export default Counters;
