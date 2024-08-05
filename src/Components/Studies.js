import React from 'react';
import { Typography, useMediaQuery, useTheme, IconButton, Divider, Link } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';
import HoverSection from './HoverSection';

const Studies = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  return (
    <HoverSection id="studies" sx={{ padding: '25px 20px', backgroundColor: theme.palette.background.paper, borderRadius: '8px', boxShadow: 3,  marginTop: isMobile ? 5 : 0, height: "75%" }}>
      <Typography variant="h2" sx={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '20px', color: theme.palette.text.primary }}>
        {t('studies')}
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginBottom: '10px', marginTop: '20px' }}>
        2024 - {t('now')}
      </Typography>
      <Link
        href="https://fis.vse.cz"
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
          {t('uni')}
        </Typography>
        <IconButton disableRipple sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle', transition: 'transform 0.3s ease' }}>
          <ArrowForwardIcon />
        </IconButton>
      </Link>
      <Typography variant="body2" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
        {t('uniDesc')}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body1" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginBottom: '10px' }}>
        2020 - 2024
      </Typography>
      <Link
        href="https://www.prumyslovkaliberec.cz"
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
          {t('school')}
        </Typography>
        <IconButton disableRipple sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle', transition: 'transform 0.3s ease' }}>
          <ArrowForwardIcon />
        </IconButton>
      </Link>
      <Typography variant="body2" sx={{ fontSize: '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
        {t('schoolDesc')}
      </Typography>

    </HoverSection>
  );
};

export default Studies;
