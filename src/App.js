import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMediaQuery, Box, IconButton, Button, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import About from './Components/About';
import { useTranslation } from 'react-i18next';
import Typical from 'react-typical';

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
  },
});

function App() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if(touchEndX === 0){ 
      return;
    }
    if (touchStartX - touchEndX > 80) {
      // Swipe left detected
      handleDrawerToggle();
    } 
  };

  const handleDrawerToggle = () => {
    if(isMobile){
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
            sx={{ position: 'fixed', top: 16, right: 16 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          <Button onClick={() => changeLanguage('en')}>English</Button>
          <Button onClick={() => changeLanguage('cz')}>Čeština</Button>
          {isMobile ? (
            <>
            <Typography variant="h2" mb={5}>
              <Typical
                steps={[t('welcome'), 2000]}
                loop={1}
                wrapper="span"
              />
            </Typography>
             <Typography variant="p">
              {t('introduction')}
           </Typography>
           </ >
          ) : (
            <Box sx={{ flexGrow: 1, p: 1, pr: 30 }}>
            <Typography variant="h1" mb={5}>
              <Typical
                steps={[t('welcome'), 2000]}
                loop={1}
                wrapper="span"
              />
            </Typography>
            <Typography variant="p">
              {t('introduction')}
           </Typography>
           </Box>
          )}
          <Home />
          <About />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
