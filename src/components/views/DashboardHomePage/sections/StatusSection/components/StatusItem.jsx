import { Card, CardContent, Typography, Box } from '@mui/material';

const StatusItem = ({ title, value, icon, color }) => {
  return (
    <Card
      sx={{
        borderRadius: '16px',
        backgroundColor: color || 'primary.light',
        color: 'white',
        height: '100%',
      }}>
      <CardContent>
        <Box
          display='flex'
          alignItems='center'
          gap={2}>
          {icon}
          <Box>
            <Typography variant='h6'>{title}</Typography>
            <Typography
              variant='h5'
              fontWeight='bold'>
              {value}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatusItem;
