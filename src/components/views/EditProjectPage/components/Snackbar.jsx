import { Snackbar, Alert } from '@mui/material';
const SnackbarEdit = ({ open, onClose }) => {
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
        تم حفظ التعديلات بنجاح
      </Alert>
    </Snackbar>
  );
};

export default SnackbarEdit;
