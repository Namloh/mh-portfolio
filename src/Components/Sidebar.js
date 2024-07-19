import React, { useEffect } from 'react';
import { List, ListItem, ListItemText, Divider, SwipeableDrawer, useTheme } from '@mui/material';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const drawerWidth = 250;
  const theme = useTheme();
  const { t } = useTranslation();

  // Function to store the scroll position
  const storeScrollPosition = () => {
    localStorage.setItem('scrollPosition', window.scrollY);
  };

  // Function to restore the scroll position
  const restoreScrollPosition = () => {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }
  };

  // Use effects to manage scroll position before and after drawer toggle
  useEffect(() => {
    if (mobileOpen) {
      storeScrollPosition();
    }
  }, [mobileOpen]);

  useEffect(() => {
    restoreScrollPosition();
  }, [mobileOpen]);

  const drawer = (
    <div>
      <Divider sx={{ backgroundColor: theme.palette.divider }} />
      <List>
        <Link to="about" smooth={true} duration={500} onClick={handleDrawerToggle} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem button sx={{ '&:hover': { backgroundColor: theme.palette.action.hover }, transition: 'background-color 0.3s' }}>
            <ListItemText primary={t('about')} sx={{ color: theme.palette.text.primary }} />
          </ListItem>
        </Link>
        <Link to="studies" smooth={true} duration={500} onClick={handleDrawerToggle} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem button sx={{ '&:hover': { backgroundColor: theme.palette.action.hover }, transition: 'background-color 0.3s' }}>
            <ListItemText primary={t('studies')} sx={{ color: theme.palette.text.primary }} />
          </ListItem>
        </Link>
        <Link to="experience" smooth={true} duration={500} onClick={handleDrawerToggle} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem button sx={{ '&:hover': { backgroundColor: theme.palette.action.hover }, transition: 'background-color 0.3s' }}>
            <ListItemText primary={t('experience')} sx={{ color: theme.palette.text.primary }} />
          </ListItem>
        </Link>
        <Link to="projects" smooth={true} duration={500} onClick={handleDrawerToggle} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem button sx={{ '&:hover': { backgroundColor: theme.palette.action.hover }, transition: 'background-color 0.3s' }}>
            <ListItemText primary={t('projects')} sx={{ color: theme.palette.text.primary }} />
          </ListItem>
        </Link>
        <Link to="contact" smooth={true} duration={500} onClick={handleDrawerToggle} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem button sx={{ '&:hover': { backgroundColor: theme.palette.action.hover }, transition: 'background-color 0.3s' }}>
            <ListItemText primary={t('contactMe')} sx={{ color: theme.palette.text.primary }} />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <nav aria-label="mailbox folders">
      <SwipeableDrawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        onOpen={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth - 30,
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            padding: '16px',
          },
        }}
      >
        {drawer}
      </SwipeableDrawer>
      
      {/* Uncomment for desktop drawer if needed */}
      {/* 
      <Drawer
        anchor="right"
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            padding: '16px',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
      */}
    </nav>
  );
};

export default Sidebar;
