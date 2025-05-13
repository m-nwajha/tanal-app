// Import MUI Components.
import { Container, Grid, Skeleton } from '@mui/material';

// Import Components.
import SectionHeader from './components/SectionHeader';
import CardItem from './components/CardItem';
import MoreCard from './components/MoreCard';

// Import Style.
import { WrapperStyled } from './style';

const BoxesItemSection = ({
  title,
  description,
  cardItems,
  moreHref,
  SkeletonItem,
  loading
}) => {
  return (
    <WrapperStyled>
      <Container maxWidth='lg'>
        <SectionHeader
          title={title}
          description={description}
        />
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          spacing={8}>
          {loading
            ? // Show Skeleton if loading is true
              SkeletonItem?.map(item => {
                return (
                  <Grid
                    item
                    size={{ sm: 10, md: 4 }}
                    alignSelf='center'
                    key={item}>
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
                    size={{ sm: 10, md: 4 }}
                    alignSelf='center'
                    key={cardItem.id}>
                    <CardItem
                      href={cardItem?.href || '#'}
                      img={cardItem?.img}
                      title={cardItem?.title}
                      description={cardItem?.description}
                    />
                  </Grid>
                );
              })}
          { // Show MoreCard if moreHref is provided
          moreHref && (
            <Grid
              item
              size={{ sm: 10, md: 4 }}
              alignSelf='center'>
              <MoreCard moreHref={moreHref} />
            </Grid>
          )}
        </Grid>
      </Container>
    </WrapperStyled>
  );
};

export default BoxesItemSection;
