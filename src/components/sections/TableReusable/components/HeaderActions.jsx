import { Grid, Typography, Button } from '@mui/material';
import Link from 'next/link';

const HeaderActions = ({ title, createBtn }) => (
  <Grid
    container
    sx={{ display: 'flex', justifyContent: 'space-between', p: 3 }}>
    <Grid
      item
      sx={{ alignSelf: 'center' }}>
      <Typography
        color='primary'
        variant='h6'
        sx={{ p: 2 }}>
        {title}
      </Typography>
    </Grid>
    <Grid
      item
      sx={{ alignSelf: 'center' }}>
      <Button
        component={Link}
        sx={{borderRadius: '12px'}}
        href={createBtn?.link}
        variant='contained'>
        {createBtn?.label}
      </Button>
    </Grid>
  </Grid>
);

export default HeaderActions;
