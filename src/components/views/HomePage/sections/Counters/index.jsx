'use client';
// Import React.
import { useEffect } from 'react';

// Import MUI Components.
import { Container, Grid } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
// Import Components.
import CountersSectionHeader from './components/CountersSectionHeader';
import CounterItem from './components/CounterItem';
import CounterItemSkeleton from './components/CounterItemSkeleton';
import { END_POINTS } from '@/constants/END_POINTS';
import useAPI from '@/hooks/useAPI';

// Import Style.
import { CountersWrapperStyled } from './style';
import { API_KEY } from '@/config/API';
import { ICONS } from '@/constants/ICONS';
import { skeletonArr } from '@/utils/skeletonArr';

const Counters = ({ getDataConstant }) => {
  // Use API.
  const { data, loading, get } = useAPI(END_POINTS.COUNTER, API_KEY);

  // Use Effect.
  useEffect(() => {
    get();
  }, []);

  return (
    <CountersWrapperStyled id='counters'>
      <Container maxWidth='lg'>
        {/** Counter Section Header */}
        <CountersSectionHeader getData={getDataConstant?.COUNTERS} />

        {/** Counter Items */}
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          spacing={6}>
          {loading || data.length === 0
            ? skeletonArr(4).map((_,index) => {
                return (
                  <Grid
                    mt={9}
                    item
                    size={{ sm: 5, xs: 11 }}
                    alignSelf='center'
                    key={index}>
                    <CounterItemSkeleton />
                  </Grid>
                );
              })
            : data.map(counterItem => {
                return (
                  <Grid
                    mt={9}
                    item
                    size={{ sm: 5, xs: 11 }}
                    alignSelf='center'
                    key={counterItem._id}>
                    <CounterItem
                      getData={counterItem}
                      icon={ICONS[counterItem.icon] || <FavoriteRoundedIcon />}
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
