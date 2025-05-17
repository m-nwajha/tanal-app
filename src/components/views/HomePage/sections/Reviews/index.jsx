import { Container, Grid } from '@mui/material';
import SectionHeader from './components/SectionHeader';
import { WrapperStyled } from './style';
import ReviewItem from './components/ReviewItem';

const Reviews = () => {
  return (
    <WrapperStyled>
      <Container maxWidth='lg'>
        <SectionHeader
          title='ماذا قالوا عنا؟'
          description='هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى'
        />
        <Grid
          container
          justifyContent='center'
          alignItems='center'
          spacing={3}>
          <Grid
            item
            size={{ sm: 10, md: 4 }}>
            <ReviewItem />
          </Grid>
          <Grid
            item
            size={{ sm: 10, md: 4 }}>
            <ReviewItem />
          </Grid>
          <Grid
            item
            size={{ sm: 10, md: 4 }}>
            <ReviewItem />
          </Grid>
        </Grid>
      </Container>
    </WrapperStyled>
  );
};

export default Reviews;
