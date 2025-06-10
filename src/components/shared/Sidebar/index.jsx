'use client';

import React, { useState } from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  useTheme,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Logo from '@/components/ui/Logo';
import { usePathname, useRouter } from 'next/navigation';
import { DASHBOARD_NAV } from '@/constants/dashboardNav';

const Sidebar = () => {
  const theme = useTheme();
  const pathName = usePathname();
  const router = useRouter();

  const [openItems, setOpenItems] = useState({});

  const toggleOpen = id => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const activeStyle = {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '10px',
  };

  return (
    <Box
      width={240}
      bgcolor={theme.palette.primary.main}
      color='white'
      p={2}
      sx={{
        'direction': 'rtl',
        'position': 'fixed',
        'top': 0,
        'bottom': 0,
        'right': 0,
        'overflow': 'scroll',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Logo
          height={90}
          variant='light'
        />
      </Box>

      <List
        sx={{ mx: 2, my: 4 }}
        component='nav'>
        {DASHBOARD_NAV.map(item => {
          const isActive = pathName === item.href;
          const hasChildren = Array.isArray(item.children);

          if (hasChildren) {
            return (
              <React.Fragment key={item.id}>
                <ListItemButton
                  onClick={() => toggleOpen(item.id)}
                  sx={{
                    ...(openItems[item.id] ? activeStyle : {}),
                    '&:hover': activeStyle,
                  }}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 0, ml: 2 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{ textAlign: 'right' }}
                    primary={item.label}
                  />
                  {openItems[item.id] ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={openItems[item.id]}
                  timeout='auto'
                  unmountOnExit>
                  <List
                    component='div'
                    disablePadding>
                    {item.children.map(child => {
                      const isChildActive = pathName === child.href;
                      return (
                        <ListItemButton
                          key={child.id}
                          onClick={() => router.push(child.href)}
                          sx={{
                            'mt': 2,
                            'pr': 4,
                            ...(isChildActive ? activeStyle : {}),
                            '&:hover': activeStyle,
                          }}>
                          <ListItemIcon
                            sx={{ color: 'white', minWidth: 0, ml: 2 }}>
                            {child.icon}
                          </ListItemIcon>
                          <ListItemText
                            sx={{ textAlign: 'right' }}
                            primary={child.label}
                          />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Collapse>
              </React.Fragment>
            );
          }

          return (
            <ListItemButton
              key={item.id}
              onClick={() => router.push(item.href)}
              sx={{
                ...(isActive ? activeStyle : {}),
                'my': 2,
                '&:hover': activeStyle,
              }}>
              <ListItemIcon sx={{ color: 'white', minWidth: 0, ml: 2 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                sx={{ textAlign: 'right' }}
                primary={item.label}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;
