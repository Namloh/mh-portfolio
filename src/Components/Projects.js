import React from 'react';
import { Box, Typography, useMediaQuery, useTheme, IconButton, Divider } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  return (
    <Box id="projects" sx={{ padding: '25px 20px', backgroundColor: theme.palette.background.paper, borderRadius: '8px', boxShadow: 3, marginTop: 5 }}>
      <Typography variant="h2" sx={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '20px', color: theme.palette.text.primary }}>
        {t('projects')}
      </Typography>
      

      <Typography variant="body1" sx={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: 'bold', color: theme.palette.text.primary, display: 'inline-block' }}>
        {t('project1')}
        <IconButton
          href="https://github.com/Namloh/MyMeal/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          disableRipple
          sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle',  transition: 'transform 0.3s ease', 
            '&:hover': {
              transform: 'translateX(6px)',
            } }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Typography>
      <Typography variant="body2" sx={{ fontSize: isMobile ? '0.875rem' : '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
        {t('project1Description')}
      </Typography>

      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" sx={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: 'bold', color: theme.palette.text.primary, display: 'inline-block' }}>
        {t('project2')}
        <IconButton
          href="https://github.com/Namloh/Frontend-projects"
          target="_blank"
          rel="noopener noreferrer"
          disableRipple
          sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle',  transition: 'transform 0.3s ease', 
            '&:hover': {
              transform: 'translateX(6px)',
            } }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Typography>
      <Typography variant="body2" sx={{ fontSize: isMobile ? '0.875rem' : '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
        {t('project2Description')}
      </Typography>

      <Divider sx={{ my: 2 }} />
      <Typography variant="body1" sx={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: 'bold', color: theme.palette.text.primary, display: 'inline-block' }}>
        {t('project3')}
        <IconButton
          href="https://github.com/Namloh/publicgallery"
          target="_blank"
          rel="noopener noreferrer"
          disableRipple
          sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle',  transition: 'transform 0.3s ease', 
            '&:hover': {
              transform: 'translateX(6px)',
            } }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Typography>
      <Typography variant="body2" sx={{ fontSize: isMobile ? '0.875rem' : '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
        {t('project3Description')}
      </Typography>
    </Box>
  );
};

export default Projects;
