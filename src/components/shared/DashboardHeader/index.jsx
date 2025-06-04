'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Box,
  Badge,
  Menu,
  MenuItem,
  Avatar,
  ListItemIcon,
  Divider,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import Person from '@mui/icons-material/Person';
import MarkChatUnreadRoundedIcon from '@mui/icons-material/MarkChatUnreadRounded';
import { useCookies } from 'react-cookie';
import { PATHS } from '@/constants/PATHS';
import { ROLES } from '@/constants/ROLES';
import { useRouter } from 'next/navigation';

const DashboardHeader = ({ onMenuClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [notifAnchor, setNotifAnchor] = useState(null);
  const [userAnchor, setUserAnchor] = useState(null);
  const handleNotifOpen = e => setNotifAnchor(e.currentTarget);
  const handleNotifClose = () => setNotifAnchor(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const handleUserOpen = e => setUserAnchor(e.currentTarget);
  const handleUserClose = () => setUserAnchor(null);
  const [cookies, setCookie] = useCookies(['token', 'user', 'role']);
  const router = useRouter();
  const handelLogout = () => {
    setCookie('token', null);
    setCookie('user', '');
    setCookie('role', ROLES.GUEST);
    setShowSnackbar(true);
    setTimeout(() => {
      router.push(PATHS.HOME);
    }, 1500);
  };
  return (
    <AppBar
      position='static'
      sx={{ backgroundColor: theme.palette.quaternary.main }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {isMobile && (
          <IconButton
            edge='start'
            color='primary'
            onClick={onMenuClick}
            aria-label='menu'>
            <MenuIcon />
          </IconButton>
        )}
        <Typography
          variant='h6'
          component='div'
          sx={{ color: theme.palette.primary.main }}>
          لوحة التحكم
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* الإشعارات */}
          <IconButton onClick={handleNotifOpen}>
            <Badge
              badgeContent={9}
              color='error'>
              <NotificationsIcon color='primary' />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={notifAnchor}
            open={Boolean(notifAnchor)}
            onClose={handleNotifClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            sx={{ direction: 'rtl', borderRadius: '50px' }}>
            <MenuItem
              disabled
              sx={{
                fontWeight: 'bold',
                color: theme.palette.primary.main,
              }}>
              <Person sx={{ ml: 1 }} /> الإشعارات
            </MenuItem>
            <Divider />
            {[1, 2, 3, 4].map(n => (
              <MenuItem
                key={n}
                onClick={handleNotifClose}>
                <ListItemIcon>
                  <MarkChatUnreadRoundedIcon />
                </ListItemIcon>
                <Box>
                  <Typography sx={{ fontSize: '0.9rem' }}>
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                  </Typography>
                  <Typography sx={{ fontSize: '0.7rem', opacity: 0.6 }}>
                    قبل 30 دقيقة
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Menu>

          {/* المستخدم */}
          <IconButton
            onClick={handleUserOpen}
            sx={{ p: 0, backgroundColor: '#f2f7f9', borderRadius: '6px' }}>
            <Avatar
              alt='User'
              src='https://i.pravatar.cc/150?img=3'
              sx={{ width: 37, height: 37, ml: 1 }}
            />
            {!isMobile && (
              <>
                <Typography
                  variant='body2'
                  sx={{
                    mx: 1,
                    color: 'var(--color-blue-light)',
                  }}>
                  {cookies.user}
                </Typography>
                <MoreVertIcon />
              </>
            )}
          </IconButton>
          <Menu
            anchorEl={userAnchor}
            open={Boolean(userAnchor)}
            onClose={handleUserClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            sx={{ direction: 'rtl' }}>
            <MenuItem onClick={handleUserClose}>
              <ListItemIcon>
                <Person fontSize='small' />
              </ListItemIcon>
              الملف الشخصي
            </MenuItem>
            <MenuItem onClick={handleUserClose}>
              <ListItemIcon>
                <Settings fontSize='small' />
              </ListItemIcon>
              الإعدادات
            </MenuItem>
            <Divider />
            <MenuItem onClick={handelLogout}>
              <ListItemIcon>
                <Logout fontSize='small' />
              </ListItemIcon>
              تسجيل الخروج
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}>
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity='success'
          sx={{ width: '100%' }}>
          تم تسجيل الخروج!
        </Alert>
      </Snackbar>
    </AppBar>
  );
};

export default DashboardHeader;
