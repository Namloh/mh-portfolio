import React from 'react';
import { Typography, useMediaQuery, useTheme, IconButton, Divider, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';
import HoverSection from './HoverSection';

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  return (
 
    <HoverSection id="projects" sx={{padding: '25px 20px', backgroundColor: theme.palette.background.paper, borderRadius: '8px', boxShadow: 3, marginTop: 5 }}>
     
      <Typography variant="h2" sx={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '20px', color: theme.palette.text.primary }}>
        {t('projects')}
      </Typography>

      <Link
        href="https://github.com/Namloh/MyMeal/tree/main"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textDecoration: 'none',
          color: theme.palette.text.primary,
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
          cursor: 'pointer',
          '&:hover .MuiIconButton-root': { transform: 'translateX(6px)' },
        }}
      >
        <Typography variant="body1" sx={{ fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 'bold', display: 'inline-block' }}>
          {t('project1')}
        </Typography>
        <IconButton disableRipple sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle', transition: 'transform 0.3s ease' }}>
          <ArrowForwardIcon />
        </IconButton>
      </Link>
      <Typography variant="body2" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
        {t('project1Description')}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Link
        href="https://geniusbistro.cz/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textDecoration: 'none',
          color: theme.palette.text.primary,
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
          cursor: 'pointer',
          '&:hover .MuiIconButton-root': { transform: 'translateX(6px)' },
        }}
      >
        <Typography variant="body1" sx={{ fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 'bold', display: 'inline-block' }}>
          {t('project2')}
        </Typography>
        <IconButton disableRipple sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle', transition: 'transform 0.3s ease' }}>
          <ArrowForwardIcon />
        </IconButton>
      </Link>
      <Typography variant="body2" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
        {t('project2Description')}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Link
        href="https://ateliery-a.com/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textDecoration: 'none',
          color: theme.palette.text.primary,
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
          cursor: 'pointer',
          '&:hover .MuiIconButton-root': { transform: 'translateX(6px)' },
        }}
      >
        <Typography variant="body1" sx={{ fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 'bold', display: 'inline-block' }}>
          {t('project3')}
        </Typography>
        <IconButton disableRipple sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle', transition: 'transform 0.3s ease' }}>
          <ArrowForwardIcon />
        </IconButton>
      </Link>
      <Typography variant="body2" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
        {t('project3Description')}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Link
        href="https://pkfl.cz/30-let-pkfl"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textDecoration: 'none',
          color: theme.palette.text.primary,
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
          cursor: 'pointer',
          '&:hover .MuiIconButton-root': { transform: 'translateX(6px)' },
        }}
      >
        <Typography variant="body1" sx={{ fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 'bold', display: 'inline-block' }}>
          {t('project4')}
        </Typography>
        <IconButton disableRipple sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle', transition: 'transform 0.3s ease' }}>
          <ArrowForwardIcon />
        </IconButton>
      </Link>
      <Typography variant="body2" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
        {t('project4Description')}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Link
        href="https://github.com/Namloh/publicgallery"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textDecoration: 'none',
          color: theme.palette.text.primary,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          '&:hover .MuiIconButton-root': { transform: 'translateX(6px)' },
        }}
      >
        <Typography variant="body1" sx={{ fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 'bold', display: 'inline-block' }}>
          {t('project5')}
        </Typography>
        <IconButton disableRipple sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle', transition: 'transform 0.3s ease' }}>
          <ArrowForwardIcon />
        </IconButton>
      </Link>
      <Typography variant="body2" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
        {t('project5Description')}
      </Typography>
   
    </HoverSection>
  );
};

export default Projects;
