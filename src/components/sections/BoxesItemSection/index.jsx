// Import MUI Components.
import { Container, Grid, Skeleton } from '@mui/material';

// Import Components.
import SectionHeader from './components/SectionHeader';
import CardItem from './components/CardItem';
import MoreCard from './components/MoreCard';

// Import Style.
import { WrapperStyled } from './style';
import { skeletonArr } from '@/utils/skeletonArr';

const BoxesItemSection = ({
  title,
  description,
  cardItems,
  moreHref,
  loading,
}) => {
  return (
    <WrapperStyled>
      <Container maxWidth='lg'>
        {title && (
          <SectionHeader
            title={title}
            description={description}
          />
        )}
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          spacing={8}>
          {loading || cardItems.length === 0
            ? skeletonArr(moreHref ? 5 : 6)?.map((_, index) => {
                return (
                  <Grid
                    item
                    size={{ sm: 10, xs: 12, md: 6, lg: 4 }}
                    alignSelf='center'
                    key={index}>
                    <Skeleton
                      variant='rounded'
                      sx={{ borderRadius: '16px' }}
                      width='100%'
                      height='250px'
                    />
                  </Grid>
                );
              })
            : // Show CardItem if loading is false
              cardItems?.map(cardItem => {
                return (
                  <Grid
                    item
                    size={{ sm: 12, xs: 12, md: 6, lg: 4 }}
                    alignSelf='center'
                    key={cardItem._id}>
                    <CardItem
                      href={cardItem?.href || '#'}
                      img={cardItem?.image}
                      title={cardItem?.title}
                      description={cardItem?.description}
                    />
                  </Grid>
                );
              })}
          {
            // Show MoreCard if moreHref is provided
            moreHref && (
              <Grid
                item
                size={{ sm: 10, xs: 12, md: 6, lg: 4 }}
                alignSelf='center'>
                <MoreCard moreHref={moreHref} />
              </Grid>
            )
          }
        </Grid>
      </Container>
    </WrapperStyled>
  );
};

export default BoxesItemSection;
