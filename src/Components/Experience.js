import React from 'react';
import { Typography, useMediaQuery, useTheme, IconButton, Divider, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';
import HoverSection from './HoverSection';

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  return (
    <HoverSection id="experience" sx={{ padding: '25px 20px', backgroundColor: theme.palette.background.paper, borderRadius: '8px', boxShadow: 3, height: "100%"}}>
      <Typography variant="h2" sx={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '20px', color: theme.palette.text.primary }}>
        {t('experience')}
      </Typography>

      <Typography variant="body1" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginBottom: '10px', marginTop: '20px' }}>
        {t('september')} 2024 - {t('december')} 2024
      </Typography>
      <Link
        href="https://www.icnet.cz/"
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
          {t('job4')}
        </Typography>
        <IconButton disableRipple sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle', transition: 'transform 0.3s ease' }}>
          <ArrowForwardIcon />
        </IconButton>
      </Link>
      <Typography variant="body2" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
        {t('job4Description')}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body1" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginBottom: '10px', marginTop: '20px' }}>
        {t('august')} 2023 - {t('september')} 2023
      </Typography>
      <Link
        href="https://www.byevolution.com/"
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
          {t('job3')}
        </Typography>
        <IconButton disableRipple sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle', transition: 'transform 0.3s ease' }}>
          <ArrowForwardIcon />
        </IconButton>
      </Link>
      <Typography variant="body2" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
      {t('job3Description')}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body1" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginBottom: '10px', marginTop: '20px' }}>
        {t('february')} 2023 - {t('july')} 2023
      </Typography>
      <Link
        href="https://www.kassua.cz/"
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
          {t('job2')}
        </Typography>
        <IconButton disableRipple sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle', transition: 'transform 0.3s ease' }}>
          <ArrowForwardIcon />
        </IconButton>
      </Link>
      <Typography variant="body2" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
        {t('job2Description')}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body1" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginBottom: '10px' }}>
        {t('may')} 2022
      </Typography>
      <Link
        href="https://www.mahle.com/en/about-mahle/locations/6104.jsp"
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
          {t('job1')}
        </Typography>
        <IconButton disableRipple sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle', transition: 'transform 0.3s ease' }}>
          <ArrowForwardIcon />
        </IconButton>
      </Link>
      <Typography variant="body2" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
        {t('job1Description')}
      </Typography>
    </HoverSection>
  );
};

export default Experience;
