'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
  IconButton,
  LinearProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const schema = Yup.object().shape({
  user: Yup.string().notRequired(),
  email: Yup.string().email('صيغة البريد غير صحيحة').notRequired(),
  password: Yup.string().min(6, 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'),
});

const calculatePasswordStrength = password => {
  let score = 0;
  if (!password) return score;
  if (password.length > 5) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;
  return score;
};

const UpdateProfilePage = () => {
  const [cookies, setCookie] = useCookies(['user']);
  const userId = cookies?.id;
  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const { put, loading } = useAPI(
    `${END_POINTS.AUTH}/${userId}`,
    API_KEY
  );

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const passwordValue = watch('password');
  const passwordStrength = calculatePasswordStrength(passwordValue);


  const onSubmit = async formData => {
    const res = await put(formData);
    if (res) {
      setOpenSnackbar(true);
      setCookie('user', formData.user);
    }
  };

  return (
    <Container
      maxWidth='sm'
      sx={{ mt: 5 }}>
      <Typography
        variant='h5'
        color='primary'
        gutterBottom>
        تعديل الحساب
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 2 }}>
        <FormControl
          fullWidth
          margin='normal'
          error={Boolean(errors.user)}>
          <InputLabel htmlFor='user'>اسم المستخدم</InputLabel>
          <OutlinedInput
            id='user'
            label='اسم المستخدم'
            {...register('user')}
          />
          {errors.user && (
            <FormHelperText>{errors.user.message}</FormHelperText>
          )}
        </FormControl>

        <FormControl
          fullWidth
          margin='normal'
          error={Boolean(errors.email)}>
          <InputLabel htmlFor='email'>البريد الإلكتروني</InputLabel>
          <OutlinedInput
            id='email'
            label='البريد الإلكتروني'
            {...register('email')}
          />
          {errors.email && (
            <FormHelperText>{errors.email.message}</FormHelperText>
          )}
        </FormControl>

        <FormControl
          fullWidth
          margin='normal'
          error={Boolean(errors.password)}>
          <InputLabel htmlFor='password'>كلمة المرور الجديدة</InputLabel>
          <OutlinedInput
            id='password'
            type={showPassword ? 'text' : 'password'}
            label='كلمة المرور الجديدة'
            {...register('password')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge='end'>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {errors.password && (
            <FormHelperText>{errors.password.message}</FormHelperText>
          )}
          {passwordValue && (
            <LinearProgress
              variant='determinate'
              value={(passwordStrength / 4) * 100}
              sx={{ mt: 1 }}
              color={passwordStrength < 3 ? 'error' : 'success'}
            />
          )}
        </FormControl>

        <Button
          type='submit'
          variant='contained'
          color='primary'
          disabled={loading}
          sx={{ mt: 3 }}
          fullWidth>
          حفظ التغييرات
        </Button>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}>
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity='success'
          sx={{ width: '100%' }}>
          تم تحديث البيانات بنجاح
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UpdateProfilePage;
