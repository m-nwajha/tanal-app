import { Snackbar, Alert } from '@mui/material';
const SnackbarCreate = ({ open, onClose }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
      <Alert
        onClose={onClose}
        severity='success'
        sx={{ width: '100%' }}>
        تم إضافة خدمة جديدة بنجاح
      </Alert>
    </Snackbar>
  );
};

export default SnackbarCreate;
