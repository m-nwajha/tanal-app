import { Container, Grid } from '@mui/material';
import { WrapperStyled } from './style';
import SectionHeader from './components/SectionHeader';
import CardItem from './components/CardItem';
import { UPLOAD_PATH } from '@/constants/UPLOAD_PATH';
import { PATHS } from '@/constants/PATHS';
import SkeletonSection from './components/SkeletonSection';

const RoundedBGBlue = ({ title, description, items, loading }) => {
  const imgDefault = '/assets/images/about-img2.webp';
  return (
    <WrapperStyled>
      <Container>
        <SectionHeader
          title={title}
          description={description}
        />
        {loading || items.length === 0 ? (
          <SkeletonSection />
        ) : (
          <Grid
            container
            justifyContent='center'
            alignItems='center'
            spacing={3}>
            {items.map(item => {
              return (
                <Grid
                  key={item._id}
                  item
                  size={{ sm: 10, md: 3 }}
                  alignSelf='center'>
                  <CardItem
                    btn1={{
                      href: `${PATHS.PROJECTS}/${item?.title}`,
                      label: 'المزيد',
                    }}
                    btn2={{ href: PATHS.REQUEST, label: 'اشترك' }}
                    img={
                      item.image ? `${UPLOAD_PATH}${item.image}` : imgDefault
                    }
                    title={item?.title}
                    description={item?.description}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Container>
    </WrapperStyled>
  );
};

export default RoundedBGBlue;
