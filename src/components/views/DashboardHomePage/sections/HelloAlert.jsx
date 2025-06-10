'use client';
import { Alert } from '@mui/material';
import { useCookies } from 'react-cookie';

const HelloAlert = () => {
  const [cookies] = useCookies(['user']);
  return (
    <Alert
      variant='outlined'
      severity='success'
      sx={{ my: 3 }}>
      أهلا وسهلا بكم {cookies.user}
    </Alert>
  );
};

export default HelloAlert;
