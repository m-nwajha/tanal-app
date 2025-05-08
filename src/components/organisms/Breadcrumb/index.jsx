'use client';
// Import MUi.
import { Breadcrumbs, Container, Stack, Skeleton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

// Import Components.
import H from '@/components/atoms/HeadingSection';
import D from '@/components/atoms/DescriptionSection';

// Import Style.
import { BreadcrumbWrapperStyled, StyledBreadcrumb } from './style';

const Breadcrumb = ({ getDataAPI, getDataConstant, loading }) => {
  return (
    <BreadcrumbWrapperStyled>
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
            {getDataConstant?.title}
          </H>
          {loading ? (
            <Skeleton
              variant='text'
              sx={{ width: { xs: '90%', md: '40%' }, height: '5rem' }}
            />
          ) : (
            <D
              variant='h6'
              type='light'>
              {getDataAPI?.PageDescription}
            </D>
          )}
          <Breadcrumbs aria-label='breadcrumb'>
            <StyledBreadcrumb
              component='a'
              href='#'
              label='الرئيسية'
              icon={<HomeIcon fontSize='small' />}
            />
            {getDataConstant?.breadcrumbHistory.map(breadcrumbItem => {
              return (
                <StyledBreadcrumb
                  key={breadcrumbItem.id}
                  component='a'
                  href='#'
                  label={breadcrumbItem.label}
                />
              );
            })}
          </Breadcrumbs>
        </Stack>
      </Container>
    </BreadcrumbWrapperStyled>
  );
};

export default Breadcrumb;
