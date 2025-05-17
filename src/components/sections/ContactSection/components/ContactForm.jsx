import H from '@/components/ui/HeadingSection';
import { Grid, TextField, Button, Box, Paper, useTheme } from '@mui/material';

const ContactForm = () => {
  const theme = useTheme();
  return (
    <Paper
      elevation={3}
      sx={{
        p: 5,
        borderRadius: '30px',
      }}>
      <H
        type='light'
        variant='h4'>
        التواصل معنا
      </H>
      <Box
        mt={5}
        component='form'
        noValidate>
        <Grid
          container
          spacing={2}>
          <Grid
            item
            size={12}>
            <TextField
              fullWidth
              label='اسم الكريم'
              name='name'
              required
            />
          </Grid>
          <Grid
            item
            size={12}>
            <TextField
              fullWidth
              label='البريد الإلكتروني'
              name='email'
              type='email'
              required
            />
          </Grid>
          <Grid
            item
            size={12}>
            <TextField
              fullWidth
              label='الموضوع'
              name='subject'
              sx={{ mt: 2 }}
              required
            />
          </Grid>
          <Grid
            item
            size={12}>
            <TextField
              fullWidth
              label='الرسالة'
              name='message'
              multiline
              rows={5}
              sx={{ mt: 2 }}
              required
            />
          </Grid>
        </Grid>
        {/* You can implement loading/error/success UI separately if needed */}
        <Box
          textAlign='center'
          mt={3}>
          <Button
            type='submit'
            variant='contained'
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: '20px',
            }}>
            إرسال الرسالة
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
export default ContactForm;
