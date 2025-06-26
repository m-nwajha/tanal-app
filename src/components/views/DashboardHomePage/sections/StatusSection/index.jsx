'use client';

import { Grid } from '@mui/material';
import StatusItem from './components/StatusItem';
import GroupsIcon from '@mui/icons-material/Groups';
import BuildIcon from '@mui/icons-material/Build';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import ReviewsIcon from '@mui/icons-material/Reviews';
import useAPI from '@/hooks/useAPI';
import { END_POINTS } from '@/constants/END_POINTS';
import { API_KEY } from '@/config/API';
import { useEffect } from 'react';

const StatusSection = () => {
  const { data: services, get: getServices } = useAPI(
    END_POINTS.SERVICES,
    API_KEY
  );

  const { data: projects, get: getProjects } = useAPI(
    END_POINTS.PROJECTS,
    API_KEY
  );

  const { data: clients, get: getClients } = useAPI(
    END_POINTS.CLIENTS,
    API_KEY
  );

  const { data: reviews, get: getReviews } = useAPI(
    END_POINTS.REVIEW,
    API_KEY
  );

  useEffect(() => {
    getServices();
    getProjects();
    getClients();
    getReviews();
  }, []);
  const statusData = [
    {
      title: 'عدد الخدمات',
      value: services.length,
      icon: <HomeRepairServiceIcon fontSize='large' />,
      color: '#8490C8',
    },
    {
      title: 'عدد المشاريع',
      value: projects.length,
      icon: <BuildIcon fontSize='large' />,
    },
    {
      title: 'عدد الشركاء',
      value: clients.length,
      icon: <GroupsIcon fontSize='large' />,
      color: '#8490C8',
    },
    {
      title: 'عدد التقييمات',
      value: reviews.length,
      icon: <ReviewsIcon fontSize='large' />,
    },
  ];
  return (
    <Grid
      container
      justifyContent='space-around'
      spacing={4}>
      {statusData.map((item, index) => (
        <Grid
          item
          key={index}
          size={{xs: 10, md: 6 , lg:3}}>
          <StatusItem {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatusSection;
