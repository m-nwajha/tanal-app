import React from 'react';
import { Box, Avatar, Typography, Stack, IconButton, useTheme } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { UPLOAD_PATH } from '@/constants/UPLOAD_PATH';

const TeamMember = ({ name, jobTitle, image }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        'position': 'relative',
        'borderRadius': '50%',
        'overflow': 'hidden',
        'textAlign': 'center',
        'mb': 4,
        '&:hover .overlay': {
          opacity: 1,
          backgroundColor: '#192954e0',
          backdropFilter: 'blur(5px)',
        },
        '&:hover .info': {
          mt: 0,
        },
      }}>
      <Avatar
        src={`${UPLOAD_PATH}${image}`}
        alt={name}
        sx={{ width: '100%', height: 'auto', borderRadius: 0 }}
        variant='square'
      />
      <Box
        className='overlay'
        sx={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0,
          transition: '0.4s',
          flexDirection: 'column',
        }}>
        <Stack
          className='info'
          spacing={1}
          sx={{
            mt: 5,
            transition: 'margin 0.4s',
            color: '#fff',
          }}>
          <Typography
            variant='h6'
            fontWeight='bold'>
            {name}
          </Typography>
          <Typography
            fontFamily={theme.typography.IBM}
            variant='body2'
            fontStyle='italic'>
            {jobTitle}
          </Typography>
          <Stack
            direction='row'
            spacing={1}
            justifyContent='center'
            mt={1}>
            <IconButton
              size='small'
              color='inherit'>
              <Twitter fontSize='small' />
            </IconButton>
            <IconButton
              size='small'
              color='inherit'>
              <Facebook fontSize='small' />
            </IconButton>
            <IconButton
              size='small'
              color='inherit'>
              <Instagram fontSize='small' />
            </IconButton>
            <IconButton
              size='small'
              color='inherit'>
              <LinkedIn fontSize='small' />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default TeamMember;
