import { Skeleton, Stack } from '@mui/material';

const SectionTextSkeleton = () => {
  return (
    <Stack
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      spacing={4}>
      <Skeleton
        variant='text'
        width='50%'
        height='6rem'
      />
      <Skeleton
        variant='rectangular'
        width='100%'
        height='9rem'
      />
    </Stack>
  );
};

export default SectionTextSkeleton;
