import { Container, Grid } from '@mui/material';
import { WrapperStyled } from './style';
import SectionHeader from './components/SectionHeader';
import CardItem from './components/CardItem';

const RoundedBGBlue = ({title , description , items}) => {
  return (
    <WrapperStyled>
      <Container>
        <SectionHeader
          title={'مشاريع تنال'}
          description={
            'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى'
          }
        />

        <Grid
          container
          justifyContent='center'
          alignItems='center'
          spacing={3}>
          <Grid
            item
            size={{ sm: 10, md: 3 }}
            alignSelf='center'>
            <CardItem
              btn1={{ href: '/', label: 'المزيد' }}
              btn2={{ href: '/', label: 'اشترك' }}
              img='/assets/images/about-img2.webp'
              title='مشروع تنال 1'
              description='هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى'
            />
          </Grid>
          <Grid
            item
            size={{ sm: 10, md: 3 }}
            alignSelf='center'>
            <CardItem
              btn1={{ href: '/', label: 'المزيد' }}
              btn2={{ href: '/', label: 'اشترك' }}
              img='/assets/images/about-img2.webp'
              title='مشروع تنال 1'
              description='هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى'
            />
          </Grid>
          <Grid
            item
            size={{ sm: 10, md: 3 }}
            alignSelf='center'>
            <CardItem
              btn1={{ href: '/', label: 'المزيد' }}
              btn2={{ href: '/', label: 'اشترك' }}
              img='/assets/images/about-img2.webp'
              title='مشروع تنال 1'
              description='هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى'
            />
          </Grid>
          <Grid
            item
            size={{ sm: 10, md: 3 }}
            alignSelf='center'>
            <CardItem
              btn1={{ href: '/', label: 'المزيد' }}
              btn2={{ href: '/', label: 'اشترك' }}
              img='/assets/images/about-img2.webp'
              title='مشروع تنال 1'
              description='هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى'
            />
          </Grid>
        </Grid>
      </Container>
    </WrapperStyled>
  );
};

export default RoundedBGBlue;
