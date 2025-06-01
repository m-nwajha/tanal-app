import { UPLOAD_PATH } from '@/constants/UPLOAD_PATH';
import { skeletonArr } from '@/utils/skeletonArr';
import { Grid, Box, Skeleton } from '@mui/material';
import Image from 'next/image';

const ClientItem = ({ getData, isLoading }) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent='center'>
      {(isLoading || getData.length === 0 ? skeletonArr(6) : getData).map((item, index) => (
        <Grid
          item
          xs={6}
          sm={4}
          md={3}
          lg={2}
          key={item?._id || index}>
          <Box
            sx={{
              'filter': item ? 'grayscale(100%)' : 'none',
              'transition': 'filter 0.6s ease',
              '&:hover': {
                filter: item ? 'grayscale(0%)' : 'none',
              },
              'display': 'flex',
              'justifyContent': 'center',
              'alignItems': 'center',
              'p': 1,
            }}>
            {item || !getData.length === 0? (
              <Image
                src={`${UPLOAD_PATH}${item.image}`}
                alt={item.title}
                width={150}
                height={150}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                }}
              />
            ) : (
              <Skeleton
                variant='rectangular'
                width={150}
                height={150}
                sx={{ borderRadius: '10px' }}
              />
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ClientItem;
