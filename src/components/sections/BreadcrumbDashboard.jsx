'use client';
import {
  Breadcrumbs,
  Chip,
  Container,
  Stack,
  useTheme,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
const BreadcrumbDashboard = ({breadcrumbHistory }) => {
  const theme = useTheme();

  return (
    <Container maxWidth='lg'>
      <Stack
        spacing={4}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='start'>
        <Breadcrumbs
          sx={{
            '& ol': {
              rowGap: '1.5rem',
            },
          }}
          aria-label='breadcrumb'>
          <Chip
            component='a'
            href='#'
            label='الرئيسية'
            icon={<HomeIcon fontSize='small' />}
            sx={{
              'px': 1,
              'py': 0.5,
              'backgroundColor': theme.palette.quaternary?.main || '#c3c9d7',
              'boxShadow':
                '0 0.125rem 0.125rem -0.125rem rgba(31, 27, 45, 0.08), 0 0.25rem 0.75rem rgba(31, 27, 45, 0.08)',
              'color': theme.palette.primary.main,
              '& svg': {
                color: theme.palette.primary.main,
              },
              '&:hover': {
                backgroundColor: theme.palette.quaternary?.dark || '#b0b6c2',
              },
            }}
          />

          {breadcrumbHistory?.map((item, index) => (
            <Chip
              key={index}
              component='a'
              href='#'
              label={item}
              sx={{
                'px': 1,
                'py': 0.5,
                'backgroundColor': theme.palette.quaternary?.main || '#c3c9d7',
                'boxShadow':
                  '0 0.125rem 0.125rem -0.125rem rgba(31, 27, 45, 0.08), 0 0.25rem 0.75rem rgba(31, 27, 45, 0.08)',
                'color': theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.quaternary?.dark || '#b0b6c2',
                },
              }}
            />
          ))}
        </Breadcrumbs>
      </Stack>
    </Container>
  );
};

export default BreadcrumbDashboard;
