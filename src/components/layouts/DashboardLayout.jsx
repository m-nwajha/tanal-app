'use client';
import React, { useState } from 'react';
import { Box, useMediaQuery, Drawer } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Sidebar from '../shared/Sidebar';
import DashboardHeader from '../shared/DashboardHeader';
import DashboardFooter from '../shared/DashboardFooter';
const drawerWidth = 260;

const DashboardLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'row', minHeight: '100vh' }}
        dir='rtl'>
        {/* Sidebar for desktop */}
        {!isMobile && (
          <Box
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              backgroundColor: theme.palette.primary.main,
            }}>
            <Sidebar />
          </Box>
        )}

        {/* Sidebar for mobile - Drawer */}
        {isMobile && (
          <Drawer
            anchor='top'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                backgroundColor: theme.palette.primary.main,
              },
            }}>
            <Sidebar onClose={handleDrawerToggle} />
          </Drawer>
        )}

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}>
          {/* Header with menu button on mobile */}
          <DashboardHeader onMenuClick={handleDrawerToggle} />

          {/* Main Content */}
          <Box
            component='main'
            sx={{
              flexGrow: 1,
              p: 3,
              backgroundColor: theme.palette.quinary.main,
            }}>
            {children}
          </Box>
          <DashboardFooter />
        </Box>
      </Box>
    </>
  );
};

export default DashboardLayout;
