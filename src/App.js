import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery, Box, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Components/Sidebar';
import About from './Components/About';
import { useTranslation } from 'react-i18next';

import Studies from './Components/Studies';
import Experience from './Components/Experience';
import Projects from './Components/Projects';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
    },
    button: {
      outlinedPrimary: {
        color: '#ffffff', 
        borderColor: '#ffffff', 
      },
    }
  },
});

function App() {
  const { i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  let touchStartX = 0;
  let touchEndX = 0;
  let touchStartY = 0;
  let touchEndY = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
    touchEndY = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    if (touchEndX === 0) {
      return;
    }
    if (touchStartX - touchEndX > 100 && Math.abs(touchStartY-touchEndY) < 100) { 
      // Swipe left detected
      handleDrawerToggle();
    }
  };

  const handleDrawerToggle = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ position: 'absolute', top: 16, right: 16 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3}}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        > 
          <Button color='inherit' variant={i18n.language === "en" ? '' : "outlined"} onClick={() => changeLanguage('en')}>English</Button>
          <Button color='inherit' variant={i18n.language === "cz" ? '' : "outlined"} onClick={() => changeLanguage('cz')}>Čeština</Button>
        
          <Box pl={isMobile ? 0 : 8} pr={isMobile ? 0 : 40}>
            <About isMobile={isMobile}/>
            <Studies />
            <Experience/>
            <Projects />
          </Box>

        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
