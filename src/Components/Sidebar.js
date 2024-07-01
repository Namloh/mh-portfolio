import React from 'react';
import { List, ListItem, ListItemText, Drawer, Divider, SwipeableDrawer  } from '@mui/material';
import { Link } from 'react-scroll';

const drawerWidth = 240;

const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    <div>
      <Divider />
      <List>
        <ListItem button>
          <Link to="home" smooth={true} duration={500} onClick={handleDrawerToggle}>
            <ListItemText primary="Home" />
          </Link>
        </ListItem>
        <ListItem button>
          <Link to="about" smooth={true} duration={500} onClick={handleDrawerToggle}>
            <ListItemText primary="About" />
          </Link>
        </ListItem>
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
            width: drawerWidth,
            backgroundColor: '#1e1e1e',
            color: '#ffffff',
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
