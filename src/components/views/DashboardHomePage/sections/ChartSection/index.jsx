'use client';

import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
  Skeleton,
} from '@mui/material';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const ChartSection = ({ chartData, isLoading }) => {
  const theme = useTheme();

  return (
    <Card sx={{ borderRadius: '16px', boxShadow: 'none' }}>
      <CardContent>
        <Typography
          variant='h6'
          color='primary'
          mb={2}>
          الطلبات خلال الشهر
        </Typography>

        {isLoading ? (
          <Skeleton
            variant='rectangular'
            height={250}
          />
        ) : (
          <Box
            height={250}
            dir='ltr'>
            <ResponsiveContainer
              width='100%'
              height='100%'>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='month' />
                <YAxis />
                <Tooltip />
                <Line
                  type='monotone'
                  dataKey='value'
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default ChartSection;
