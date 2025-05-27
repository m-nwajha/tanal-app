import React from 'react';
import { StyledReviewItem } from './style';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import { Avatar, CardContent, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { UPLOAD_PATH } from '@/constants/UPLOAD_PATH';

const ReviewItem = ({ getData }) => {
  const { colors } = useTheme();
  const maxLength = 150;
  return (
    <StyledReviewItem>
      <div className='icon'>
        <FormatQuoteRoundedIcon />
      </div>
      <CardContent>
        <Avatar
          sx={{ mb: 2, height: 60, width: 60 }}
          variant='circular'
          src={`${UPLOAD_PATH}${getData?.image}`}
          alt={getData?.name}
        />
        <Typography
          lineHeight={2}
          variant='body2'
          color='secondary'>
          {getData?.reviewText.length > maxLength
            ? getData?.reviewText.substring(0, maxLength) + '...'
            : getData?.reviewText}
        </Typography>
        <Stack
          justifyContent='center'
          alignItems='start'
          mt={2}>
          <Typography
            color={colors.tertiary}
            variant='subtitle1'
            fontWeight='bold'>
            {getData?.name}
          </Typography>
          <Typography
            variant='body2'
            color='textDisabled'>
            {getData?.jobTitle}
          </Typography>
        </Stack>
      </CardContent>
    </StyledReviewItem>
  );
};

export default ReviewItem;
