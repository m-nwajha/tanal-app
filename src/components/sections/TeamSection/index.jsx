import { Container, Grid, Typography, Box, useTheme } from '@mui/material';
import TeamMember from './TeamMember';
import SectionHeader from '@/components/ui/SectionHeader';

const members = [
  {
    name: 'معتصم الهاشمي',
    role: 'رئيس مجلس الإدارة',
    image: '/assets/images/motasem.png',
  },
  {
    name: 'معتصم الهاشمي',
    role: 'رئيس مجلس الإدارة',
    image: '/assets/images/motasem.png',
  },
  {
    name: 'معتصم الهاشمي',
    role: 'رئيس مجلس الإدارة',
    image: '/assets/images/motasem.png',
  },
  {
    name: 'معتصم الهاشمي',
    role: 'رئيس مجلس الإدارة',
    image: '/assets/images/motasem.png',
  },
];

const TeamSection = () => {
  const theme = useTheme();

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
          {members.map((member, index) => (
            <Grid
              item
              size={{ sm: 6, md: 3 }}
              key={index}>
              <TeamMember {...member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
