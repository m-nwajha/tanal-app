'use client';
import { useState } from 'react';
import H from '@/components/ui/HeadingSection';
import { CONTACT } from '@/constants/CONTACT';
import {
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactSchema } from '@/schemas/contactSchema';
import useAPI from '@/hooks/useAPI';
import { API_KEY, RECAPTCHA_key } from '@/config/API';
import { END_POINTS } from '@/constants/END_POINTS';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const { post, loading, error, resetError } = useAPI(
    END_POINTS.CONTACT,
    API_KEY
  );
  const [successAlert, setSuccessAlert] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const handleCaptchaChange = value => {
    setCaptchaValue(value);
  };

  const onSubmit = async data => {
    if (!captchaValue) return;

    const payload = {
      ...data,
      captcha: captchaValue,
    };

    const success = await post(payload);
    if (success) {
      setSuccessAlert(true);
      reset();
      setCaptchaValue(null);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 5, borderRadius: '30px' }}>
      <H
        type='light'
        variant='h4'>
        {CONTACT.title}
      </H>

      <Box
        mt={5}
        component='form'
        noValidate
        onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={2}>
          {CONTACT.TextFields.map(field => (
            <Grid
              item
              size={12}
              key={field.name}>
              <TextField
                fullWidth
                label={field.label}
                type={field.type}
                multiline={field.multiline}
                rows={field.rows || 1}
                {...register(field.name)}
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message}
                required
              />
            </Grid>
          ))}
        </Grid>

        <Box
          mt={3}
          textAlign='center'>
          <ReCAPTCHA
            sitekey={RECAPTCHA_key}
            onChange={handleCaptchaChange}
          />
        </Box>

        <Box
          textAlign='center'
          mt={3}>
          <Button
            type='submit'
            variant='contained'
            disabled={loading || !captchaValue}
            startIcon={
              loading && (
                <CircularProgress
                  sx={{ ml: 1 }}
                  size={20}
                />
              )
            }
            sx={{ px: 5, py: 1.5, borderRadius: '20px' }}>
            {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
          </Button>
        </Box>
      </Box>

      <Snackbar
      dir='ltr'
        open={successAlert}
        autoHideDuration={4000}
        onClose={() => setSuccessAlert(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert
          onClose={() => setSuccessAlert(false)}
          severity='success'
          sx={{ width: '100%' }}>
          تم إرسال الرسالة بنجاح
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!error}
        dir='ltr'
        autoHideDuration={4000}
        onClose={resetError}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert
          onClose={resetError}
          severity='error'
          sx={{ width: '100%' }}>
          {error || 'حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى.'}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default ContactForm;
