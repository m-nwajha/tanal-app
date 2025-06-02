'use client';
import {
  Box,
  Breadcrumbs,
  Chip,
  Container,
  Stack,
  useTheme,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

// Import Components.
import H from '@/components/ui/HeadingSection';
import D from '@/components/ui/DescriptionSection';

const Breadcrumb = ({ title, description, breadcrumbHistory }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        'position': 'relative',
        'pt': '12rem',
        'pb': '5rem',
        'display': 'flex',
        'alignItems': 'center',
        '&::after': {
          content: '""',
          position: 'absolute',
          zIndex: -1,
          borderRadius: { xs: '0 0 50px 0', md: '0 0 100px 0' },
          inset: { xs: '0 10px 0 0', md: '0 40px 0 0' },
          backgroundColor: theme.palette.quinary?.main || '#eee',
        },
      }}>
      <Container maxWidth='lg'>
        <Stack
          spacing={4}
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'>
          <H
            variant='h3'
            component='h1'
            type='light'>
            {title}
          </H>
          <D
            variant='h6'
            type='light'>
            {description}
          </D>

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
                  'backgroundColor':
                    theme.palette.quaternary?.main || '#c3c9d7',
                  'boxShadow':
                    '0 0.125rem 0.125rem -0.125rem rgba(31, 27, 45, 0.08), 0 0.25rem 0.75rem rgba(31, 27, 45, 0.08)',
                  'color': theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor:
                      theme.palette.quaternary?.dark || '#b0b6c2',
                  },
                }}
              />
            ))}
          </Breadcrumbs>
        </Stack>
      </Container>
    </Box>
  );
};

export default Breadcrumb;
