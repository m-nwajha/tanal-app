// Import MUI Components.
import { Container, Grid, Stack } from '@mui/material';

// Import Components.
import TransparencyBGImagesSectionImgBox from '@/components/molecules/TransparencyBGImagesSectionImgBox';
import TransparencyBGImagesSectionText from '@/components/molecules/TransparencyBGImagesSectionText';
import TransparencyBGImagesSectionList from '@/components/molecules/TransparencyBGImagesSectionList';

// Import style.
import { SectionWrapperStyled } from './style';

const TransparencyBGImagesSection = ({
  images,
  SectionTitle,
  textData,
  listData,
  listTitle,
  loading
}) => {
  console.log(listData);
  return (
    <SectionWrapperStyled>
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={{ sm: 14, md: 4 }}>
          <Grid
            size={{ sm: 12, md: 4 }}
            justifyContent='center'
            alignItems='center'
            display='flex'
            item>
            <TransparencyBGImagesSectionImgBox
              images={images}
              title={SectionTitle}
              loading={loading}
            />
          </Grid>
          <Grid
            item
            size={{ sm: 12, md: 8 }}
            alignSelf='center'>
            <Stack spacing={3}>
              <TransparencyBGImagesSectionText
                loading={loading}
                textData={textData}
              />
              <TransparencyBGImagesSectionList
                titleList={listTitle.title}
                iconTitleList={listTitle.icon}
                listItem={listData}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapperStyled>
  );
};

export default TransparencyBGImagesSection;
