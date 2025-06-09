import { Snackbar, Alert } from '@mui/material';

const DeleteSnackbar = ({ open, onClose }) => (
  <Snackbar
    open={open}
    autoHideDuration={3000}
    onClose={onClose}>
    <Alert
      onClose={onClose}
      severity='success'
      sx={{ width: '100%' }}>
      تم الحذف بنجاح!
    </Alert>
  </Snackbar>
);

export default DeleteSnackbar;
