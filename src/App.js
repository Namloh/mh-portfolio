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
import Contact from './Components/Contact';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#1e3a4c', // Dark blue gray
      paper: '#294c60',   // Medium blue gray
    },
    text: {
      primary: '#daeafa', // Light blue gray
    },
    button: {
      outlinedPrimary: {
        color: '#d4e4f7',
        borderColor: '#d4e4f7',
      },
    },
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
    if (touchStartX - touchEndX > 100 && Math.abs(touchStartY - touchEndY) < 100) { 
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
          sx={{ flexGrow: 1 }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Box sx={{ p: 3, pb: 0 }}>
            <Button color="inherit" variant={i18n.language === 'en' ? 'outlined' : ''} onClick={() => changeLanguage('en')}>
              English
            </Button>
            <Button color="inherit" variant={i18n.language === 'cz' ? 'outlined' : ''} onClick={() => changeLanguage('cz')}>
              Čeština
            </Button>

            <Box pl={isMobile ? 0 : 8} pr={isMobile ? 0 : 8}>
              <About isMobile={isMobile} />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? 0 : 3,
                }}
              >
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: "100%"}}>
                  <Studies />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: "100%"}}>
                  <Experience />
                </Box>
              </Box>
              <Projects />
            </Box>
          </Box>
          <Contact />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
