import { Container, Grid, Box, Skeleton } from '@mui/material';
import TeamMember from './TeamMember';
import SectionHeader from '@/components/ui/SectionHeader';
import { skeletonArr } from '@/utils/skeletonArr';


const TeamSection = ({ getDataAPI, loading }) => {
  return (
    <Box
      id='team'
      sx={{
        py: 8,
      }}>
      <Container>
        <SectionHeader
          type='light'
          title='مجلس الإدارة'
          description='هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى'
        />

        <Grid
          container
          spacing={4}>
          {loading || getDataAPI.length === 0
            ? skeletonArr(4).map((_, index) => (
                <Grid
                  item
                  size={{xs: 12 , md:3 }}
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  key={index}>
                  <Skeleton
                    variant='circular'
                    width='270px'
                    height='270px'
                  />
                </Grid>
              ))
            : getDataAPI.map(memberItem => (
                <Grid
                  item
                  size={{ sm: 6, md: 3 }}
                  key={memberItem._id}>
                  <TeamMember
                    name={memberItem?.name}
                    jobTitle={memberItem?.jobTitle}
                    image={memberItem?.image}
                  />
                </Grid>
              ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
