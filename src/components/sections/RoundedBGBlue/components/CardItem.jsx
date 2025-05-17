// Import NExtJS.
import Link from 'next/link';

// Import MUI Components.
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const CardItem = ({ btn1 , btn2, img, title, description }) => {
  // Define maxLength for description.
  const maxLength = 50;
  return (
    <Card sx={{ backgroundColor: '#233768' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography
          gutterBottom
          color='#fff'
          variant='h5'
          component='div'>
          {title}
        </Typography>
        <Typography
          variant='body2'
          color='#fff'>
          {description.length > maxLength
            ? description.slice(0, maxLength) + '...'
            : description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{ justifyContent: 'center', gap: '1rem', padding: '1rem' }}>
        <Button
          variant='outlined'
          component={Link}
          sx={{
            backgroundColor: '#101c3b',
            color: '#fff',
            borderRadius: '10px',
          }}
          href={btn1.href}
          size='small'>
          {btn1.label}
        </Button>
        <Button
          variant='outlined'
          sx={{
            backgroundColor: '#101c3b',
            color: '#fff',
            borderRadius: '10px',
          }}
          component={Link}
          href={btn2.href}
          size='small'>
          {btn2.label}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
