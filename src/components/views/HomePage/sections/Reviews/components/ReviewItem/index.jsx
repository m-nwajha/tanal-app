import React from 'react';
import { StyledReviewItem } from './style';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import { Avatar, CardContent, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

const ReviewItem = () => {
  const { colors } = useTheme();
  return (
    <StyledReviewItem>
      <div className='icon'>
        <FormatQuoteRoundedIcon />
      </div>
      <CardContent>
        <Typography
          lineHeight={2}
          variant='body2'
          color='secondary'>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى
        </Typography>
        <Stack
          justifyContent='center'
          alignItems='start'
          mt={2}>
          <Typography
            color={colors.tertiary}
            variant='subtitle1'
            fontWeight='bold'>
            أحمد علي
          </Typography>
          <Typography
            variant='body2'
            color='textDisabled'>
            مدير التسويق
          </Typography>
        </Stack>
      </CardContent>
    </StyledReviewItem>
  );
};

export default ReviewItem;
