'use client';
import { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  Snackbar,
  Alert,
  CircularProgress,
  Typography,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useAPI from '@/hooks/useAPI';
import { API_KEY, RECAPTCHA_key } from '@/config/API';
import { END_POINTS } from '@/constants/END_POINTS';
import ReCAPTCHA from 'react-google-recaptcha';
import { REQUEST } from '@/constants/REQUEST';
import { requestSchema } from '@/schemas/requestSchema';

const Form = () => {
  const { post, loading, error, resetError } = useAPI(
    END_POINTS.REQUEST,
    API_KEY
  );
  const [successAlert, setSuccessAlert] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(requestSchema),
  });

  const handleCaptchaChange = value => {
    setCaptchaValue(value);
  };

  const onSubmit = async data => {
    if (!captchaValue) return;

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append('captcha', captchaValue);

    const success = await post(formData, true);
    if (success) {
      setSuccessAlert(true);
      reset();
      setCaptchaValue(null);
    }
  };

  const handleFileChange = e => {
    setValue('resumeFile', e.target.files[0]);
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 5, borderRadius: '30px' }}>
      <Box
        mt={5}
        component='form'
        noValidate
        onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={2}>
          {REQUEST.TextFields.map(field => (
            <Grid
              item
              size={12}
              key={field.name}>
              {field.type === 'select' ? (
                <TextField
                  select
                  fullWidth
                  label={field.label}
                  {...register(field.name)}
                  error={!!errors[field.name]}
                  helperText={errors[field.name]?.message}
                  SelectProps={{ native: true }}>
                  <option value=''>اختر...</option>
                  {field?.selectOptions?.map(option => (
                    <option
                      key={option.value}
                      value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              ) : (
                <TextField
                  fullWidth
                  label={field.label}
                  type={field.type}
                  multiline={field.multiline}
                  rows={field.rows || 1}
                  {...register(field.name)}
                  error={!!errors[field.name]}
                  helperText={errors[field.name]?.message}
                />
              )}
            </Grid>
          ))}

          <Grid
            item
            size={12}>
            <Typography
              fontWeight={600}
              mb={1}>
              السيرة الذاتية (PDF أو Word)
            </Typography>
            <input
              type='file'
              accept='.pdf,.doc,.docx'
              onChange={handleFileChange}
            />
            {errors.resumeFile && (
              <Typography
                color='error'
                fontSize='0.875rem'
                mt={1}>
                {errors.resumeFile.message}
              </Typography>
            )}
          </Grid>
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
            {loading ? 'جاري الإرسال...' : 'تقديم الطلب'}
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
          تم إرسال الطلب بنجاح
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
          {error || 'حدث خطأ أثناء إرسال الطلب. حاول مرة أخرى.'}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default Form;
