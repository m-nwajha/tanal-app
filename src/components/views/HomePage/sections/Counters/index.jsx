// Import MUI Components.
import { Container, Grid } from '@mui/material';

// Import Components.
import CountersSectionHeader from './components/CountersSectionHeader';
import CounterItem from './components/CounterItem';
import CounterItemSkeleton from './components/CounterItemSkeleton';


// Import Style.
import { CountersWrapperStyled } from './style';

const Counters = ({getDataConstant , getDataAPI , loading}) => {

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
          {loading
            ? Object.entries(getDataConstant?.COUNTERS?.icons).map(([key]) => {
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
            : getDataAPI?.counters?.map(counterItem => {
                return (
                  <Grid
                    mt={9}
                    item
                    size={{ sm: 5, xs: 11 }}
                    alignSelf='center'
                    key={counterItem.id}>
                    <CounterItem
                      getData={counterItem}
                      icon={getDataConstant?.COUNTERS?.icons[counterItem.title]}
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
