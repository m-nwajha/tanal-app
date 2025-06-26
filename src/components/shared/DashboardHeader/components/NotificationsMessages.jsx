'use client';
import { useState, useEffect } from 'react';
import {
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  Typography,
  Box,
} from '@mui/material';
import MarkChatUnreadRoundedIcon from '@mui/icons-material/MarkChatUnreadRounded';
import Person from '@mui/icons-material/Person';
import { API_KEY } from '@/config/API';
import { END_POINTS } from '@/constants/END_POINTS';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import useAPI from '@/hooks/useAPI';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/constants/PATHS';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
dayjs.extend(relativeTime);

const NotificationsMessages = () => {
  const [cookies, setCookie] = useCookies(['lastSeenTime']);
  const [notifAnchor, setNotifAnchor] = useState(null);
  const [newCount, setNewCount] = useState(0);

  const router = useRouter();


  const initialLastSeen = cookies.lastSeenTime
    ? parseInt(cookies.lastSeenTime)
    : Date.now();

  const [lastSeen, setLastSeen] = useState(initialLastSeen);

  const { data = [], get } = useAPI(END_POINTS.CONTACT_LATEST, API_KEY);

  useEffect(() => {
    get();
    const interval = setInterval(get, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newOnes = data.filter(
      item => new Date(item.createdAt).getTime() > lastSeen
    );
    setNewCount(newOnes.length);
  }, [data, lastSeen]);

  const handleNotifOpen = e => {
    setNotifAnchor(e.currentTarget);
    setNewCount(0);
    const now = Date.now();
    setLastSeen(now);
    setCookie('lastSeenTime', now, { path: '/', maxAge: 60 * 60 * 24 * 7 });
  };

  const handleNotifClose = () => {
    setNotifAnchor(null);
  };

  return (
    <>
      <IconButton onClick={handleNotifOpen}>
        <Badge
          badgeContent={newCount}
          color='error'>
          <EmailRoundedIcon color='primary' />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={notifAnchor}
        open={Boolean(notifAnchor)}
        PaperProps={{
          sx: { borderRadius: '15px' },
        }}
        onClose={handleNotifClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        sx={{ direction: 'rtl', borderRadius: '15px' }}>
        <MenuItem
          disabled
          sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          <Person sx={{ ml: 1 }} />
          الرسائل الجديدة
        </MenuItem>
        <Divider />
        {data.length === 0 ? (
          <MenuItem disabled>لا توجد رسائل حالياً</MenuItem>
        ) : (
          data
            .slice(0, 5)
            .map(item => (
              <MenuItem
                key={item._id}
                onClick={() => {
                  handleNotifClose();
                  router.push(PATHS.DASHBOARD.MASSAGES);
                }}>
                <ListItemIcon>
                  <MarkChatUnreadRoundedIcon />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontSize: '0.9rem' }}>
                    {item.name || 'رسالة جديدة'}
                  </Typography>
                  <Typography sx={{ fontSize: '0.7rem', opacity: 0.6 }}>
                    {dayjs(item.createdAt).fromNow()}
                  </Typography>
                </Box>
              </MenuItem>
            ))
        )}
      </Menu>
    </>
  );
};

export default NotificationsMessages;
