'use client';

import React from 'react';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
  IconButton,
  Button,
  Grid,
  Box,
  TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const ReusableForm = ({
  fields,
  onSubmit,
  schema,
  defaultValues = {},
  isLoading = false,
  submitLabel = 'حفظ',
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      setValue('image', file);
    }
  };

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ mt: 2 }}>
      <Grid
        container
        spacing={4}>
        {fields.map((field, index) => (
          <Grid
            key={index}
            item
            size={12}>
            {field.type === 'file' ? (
              <FormControl
                fullWidth
                variant='outlined'
                error={Boolean(errors.image)}>
                <InputLabel
                  shrink
                  htmlFor='image'>
                  {field.label}
                </InputLabel>
                <OutlinedInput
                  notched
                  label={field.label}
                  type='file'
                  id='image'
                  inputProps={{ accept: 'image/*' }}
                  onChange={handleFileChange}
                />
                {errors.image && (
                  <FormHelperText>{errors.image.message}</FormHelperText>
                )}
              </FormControl>
            ) : (
              <FormControl
                fullWidth
                variant='outlined'
                error={Boolean(errors[field.name])}>
                <InputLabel htmlFor={field.name}>{field.label}</InputLabel>
                <OutlinedInput
                  id={field.name}
                  type={field.type}
                  defaultValue={field.value || ''}
                  label={field.label}
                  multiline={field.multiline || false}
                  rows={field.rows || 1}
                  {...register(field.name)}
                  startAdornment={
                    field.icon && (
                      <InputAdornment
                        sx={{ ml: 2 }}
                        position='start'>
                        <IconButton
                          edge='start'
                          tabIndex={-1}>
                          {field.icon}
                        </IconButton>
                      </InputAdornment>
                    )
                  }
                />
                {errors[field.name] && (
                  <FormHelperText>{errors[field.name].message}</FormHelperText>
                )}
              </FormControl>
            )}
          </Grid>
        ))}

        <Grid item>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            disabled={isLoading}>
            {submitLabel}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReusableForm;
