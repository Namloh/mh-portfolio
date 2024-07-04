import React from 'react';
import { List, ListItem, ListItemText, Drawer, Divider, SwipeableDrawer } from '@mui/material';
import { Link } from 'react-scroll';

const drawerWidth = 250;

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    <div>
      <Divider />
      <List>
        <Link to="home" smooth={true} duration={500} onClick={handleDrawerToggle} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem button sx={{ '&:hover': { backgroundColor: '#333' }, transition: 'background-color 0.3s' }}>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="about" smooth={true} duration={500} onClick={handleDrawerToggle} style={{ textDecoration: 'none', color: 'inherit' }}>
          <ListItem button sx={{ '&:hover': { backgroundColor: '#333' }, transition: 'background-color 0.3s' }}>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <nav aria-label="mailbox folders">
      {/* Mobile drawer */}
      <SwipeableDrawer
        anchor='right'
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth -30,
            backgroundColor: '#111',
            color: '#ffffff',
            padding: '16px',
          },
        }}
      >
        {drawer}
      </SwipeableDrawer>
      {/* Desktop drawer */}
      <Drawer
        anchor='right'
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: '#1e1e1e',
            color: '#ffffff',
            padding: '16px',
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default Sidebar;
