
import { Container, Grid } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CountersSectionHeader from './components/CountersSectionHeader';
import CounterItem from './components/CounterItem';
import CounterItemSkeleton from './components/CounterItemSkeleton';
import { CountersWrapperStyled } from './style';
import { ICONS } from '@/constants/ICONS';
import { skeletonArr } from '@/utils/skeletonArr';

const SectionIconList = ({ getDataConstant, getDataAPI, loading }) => {
  return (
    <CountersWrapperStyled id='counters'>
      <Container maxWidth='lg'>
        {/** Counter Section Header */}
        <CountersSectionHeader getData={getDataConstant} />

        {/** Counter Items */}
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          spacing={6}>
          {loading || getDataAPI.length === 0
            ? skeletonArr(4).map((_, index) => {
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
            : getDataAPI.map(counterItem => {
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

export default SectionIconList;
