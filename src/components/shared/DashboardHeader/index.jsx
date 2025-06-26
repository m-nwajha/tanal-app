'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Box,
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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import { useCookies } from 'react-cookie';
import { PATHS } from '@/constants/PATHS';
import { ROLES } from '@/constants/ROLES';
import { useRouter } from 'next/navigation';
import KeyboardReturnRoundedIcon from '@mui/icons-material/KeyboardReturnRounded';
import NotificationsRequests from './components/NotificationsRequests';
import NotificationsMessages from './components/NotificationsMessages';

const DashboardHeader = ({ onMenuClick }) => {
  const [userAnchor, setUserAnchor] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const handleUserOpen = e => setUserAnchor(e.currentTarget);
  const handleUserClose = () => setUserAnchor(null);
  const [cookies, setCookie, removeCookie] = useCookies([
    'token',
    'user',
    'role',
  ]);
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
          <KeyboardReturnRoundedIcon sx={{ ml: 1, color: 'gray' }} />
          لوحة التحكم
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Notifications Requests */}
          <NotificationsRequests />

          {/* Notifications Messages */}
          <NotificationsMessages />

          {/* User Avatar */}
          <IconButton
            onClick={handleUserOpen}
            sx={{ p: 0, backgroundColor: '#f2f7f9', borderRadius: '6px' }}>
            <Avatar
              alt='User'
              src='https://avatar.iran.liara.run/public/5'
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
                  {cookies.user || 'اسم المستخدم'}
                </Typography>
                <MoreVertIcon />
              </>
            )}
          </IconButton>
          <Menu
            PaperProps={{
              sx: {
                borderRadius: '15px',
                backgroundColor: theme.palette.primary.main,
              },
            }}
            anchorEl={userAnchor}
            open={Boolean(userAnchor)}
            onClose={handleUserClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            sx={{ direction: 'rtl' }}>
            <MenuItem
              onClick={() => {
                handleUserClose;
                router.push(PATHS.DASHBOARD.SETTING.ADMIN);
              }}
              sx={{ color: theme.palette.quinary.main }}>
              <ListItemIcon sx={{ color: theme.palette.tertiary.main }}>
                <Settings fontSize='small' />
              </ListItemIcon>
              إعدادات حسابي
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={handelLogout}
              sx={{ color: theme.palette.quinary.main }}>
              <ListItemIcon sx={{ color: theme.palette.tertiary.main }}>
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
