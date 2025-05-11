// Import React JS.
import React from 'react';

// Import MUI Components.
import { Divider, ListItem, Stack, Typography } from '@mui/material';
import * as MuiIcons from '@mui/icons-material';
// import ContactSupportIcon from '@mui/icons-material/ContactSupport';
// import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
// Import Style.
import { StyledList, StyledListItemAvatar, StyledListItemText } from './style';

const TransparencyBGImagesSectionList = ({
  titleList,
  iconTitleList,
  listItem
}) => {
  return (
    <Stack spacing={1}>
      <Typography
        variant='h5'
        color='primary'>
        <Typography
          variant='caption'
          sx={{ ml: '0.5rem' }}>
          {iconTitleList}
        </Typography>
        {titleList}
      </Typography>
      <StyledList>
        {listItem?.map(listItem => {
          const IconComponent = MuiIcons[listItem.iconName];
          return (
            <React.Fragment key={listItem.id}>
              <ListItem
                sx={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'start',
                  textAlign: 'right'
                }}>
                <StyledListItemAvatar>
                  {IconComponent ? <IconComponent /> : null}
                </StyledListItemAvatar>
                <StyledListItemText
                  primary={listItem.title}
                  secondary={listItem.description}
                />
              </ListItem>
              <Divider
                variant='inset'
                component='li'
                sx={{ ml: '1rem' }}
              />
            </React.Fragment>
          );
        })}
      </StyledList>
    </Stack>
  );
};

export default TransparencyBGImagesSectionList;
