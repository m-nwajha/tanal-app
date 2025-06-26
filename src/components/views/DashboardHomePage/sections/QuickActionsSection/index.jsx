'use client';

import { Grid, Button, Paper, Typography, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MessageIcon from '@mui/icons-material/Message';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Link from 'next/link';
import { PATHS } from '@/constants/PATHS';


const actions = [
  {
    label: 'إضافة خدمة جديدة',
    icon: <AddIcon sx={{ ml: 1 }} />,
    href: PATHS.DASHBOARD.SERVICES.CREATE,
    color: 'primary',
  },
  {
    label: 'إضافة مشروع جديد',
    icon: <AddIcon sx={{ ml: 1 }} />,
    href: PATHS.DASHBOARD.PROJECTS.CREATE,
    color: 'secondary',
  },
  {
    label: 'عرض الطلبات',
    icon: <AssignmentIcon sx={{ ml: 1 }} />,
    href: PATHS.DASHBOARD.REQUESTS,
    color: 'primary',
  },
  {
    label: 'مراجعة الرسائل',
    icon: <MessageIcon sx={{ ml: 1 }} />,
    href: PATHS.DASHBOARD.MASSAGES,
    color: 'secondary',
  },
];
const QuickActionsSection = () => {
  return (
    <Paper
      sx={{
        p: 4,
        mt: 4,
        borderRadius: 4,
      }}>
      <Typography
        variant='h6'
        color='primary'
        mb={3}>
        الإجراءات السريعة
      </Typography>
      <Grid
        container
        spacing={3}>
        {actions.map((action, i) => (
          <Grid
            item
            size={10}
            key={i}>
            <Link
              href={action.href}
              passHref>
              <Button
                fullWidth
                variant='contained'
                color={action.color}
                startIcon={action.icon}
                sx={{ py: 2, borderRadius: 2 }}>
                {action.label}
              </Button>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default QuickActionsSection;
