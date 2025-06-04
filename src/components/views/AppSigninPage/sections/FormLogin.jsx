'use client';
import React, { useState, useRef } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  IconButton,
  FormHelperText,
  Snackbar,
  Alert,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MarkEmailReadRoundedIcon from '@mui/icons-material/MarkEmailReadRounded';
import loginSchema from '@/schemas/loginSchema';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY, RECAPTCHA_key } from '@/config/API';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import ReCAPTCHA from 'react-google-recaptcha';
import { PATHS } from '@/constants/PATHS';
import { ROLES } from '@/constants/ROLES';

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [showErrorSnackbar, setShowErrorSnackbar] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);
  const [cookies, setCookie] = useCookies(['token', 'user', 'role']);
  const recaptchaRef = useRef();
  const router = useRouter();

  const { post, loading, error, resetError } = useAPI(
    END_POINTS.AUTH_LOGIN,
    API_KEY
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async data => {
    if (!captchaValid) return alert('الرجاء التحقق من reCAPTCHA');

    const success = await post(data);
    if (success && success.token) {
      setCookie('token', success.token);
      setCookie('user', JSON.stringify(success.user));
      setCookie('role', ROLES.ADMIN || success.role);
      setShowSnackbar(true);
      setTimeout(() => {
        router.push(PATHS.DASHBOARD.HOME);
      }, 1500);
    } else {
      setShowErrorSnackbar(true);
    }
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      mt={3}
      sx={{ direction: 'rtl' }}>
      {/* البريد الإلكتروني */}
      <FormControl
        fullWidth
        variant='outlined'
        sx={{ my: 2 }}
        error={Boolean(errors.email)}>
        <InputLabel htmlFor='email'>البريد الإلكتروني</InputLabel>
        <OutlinedInput
          id='email'
          type='email'
          label='البريد الإلكتروني'
          {...register('email')}
          startAdornment={
            <InputAdornment position='start'>
              <IconButton>
                <MarkEmailReadRoundedIcon />
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.email && (
          <FormHelperText>{errors.email.message}</FormHelperText>
        )}
      </FormControl>

      {/* كلمة المرور */}
      <FormControl
        fullWidth
        variant='outlined'
        sx={{ my: 2 }}
        error={Boolean(errors.password || error)}>
        <InputLabel htmlFor='password'>كلمة المرور</InputLabel>
        <OutlinedInput
          id='password'
          type={showPassword ? 'text' : 'password'}
          label='كلمة المرور'
          {...register('password')}
          startAdornment={
            <InputAdornment position='start'>
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={e => e.preventDefault()}
                edge='start'>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {errors.password && (
          <FormHelperText>{errors.password.message}</FormHelperText>
        )}
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>

      {/* reCAPTCHA */}
      <Box my={2}>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_key}
          onChange={() => setCaptchaValid(true)}
          onExpired={() => setCaptchaValid(false)}
        />
      </Box>

      {/* زر الدخول */}
      <Box
        mt={5}
        textAlign='left'>
        <Button
          type='submit'
          variant='contained'
          disabled={loading}
          sx={{ px: 5, py: 1.5, borderRadius: '20px' }}>
          {loading ? '...جارٍ التحقق' : 'تسجيل الدخول'}
        </Button>
      </Box>

      {/* Snackbar - النجاح */}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}>
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity='success'
          sx={{ width: '100%' }}>
          تم تسجيل الدخول بنجاح!
        </Alert>
      </Snackbar>

      {/* Snackbar - الخطأ */}
      <Snackbar
        open={showErrorSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowErrorSnackbar(false)}>
        <Alert
          onClose={() => setShowErrorSnackbar(false)}
          severity='error'
          sx={{ width: '100%' }}>
          {'فشل تسجيل الدخول. تأكد من صحة البيانات' || error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FormLogin;
