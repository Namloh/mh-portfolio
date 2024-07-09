import React from 'react';
import { Box, Typography, useMediaQuery, useTheme, IconButton, Divider } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation();

  return (
    <Box id="experience" sx={{ padding: '25px 20px', backgroundColor: theme.palette.background.paper, borderRadius: '8px', boxShadow: 3, marginTop: 5 }}>
      <Typography variant="h2" sx={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '20px', color: theme.palette.text.primary }}>
        {t('experience')}
      </Typography>
      
      <Typography variant="body1" sx={{ fontSize: isMobile ? '0.875rem' : '1rem', color: theme.palette.text.secondary, marginBottom: '10px' }}>
        {t('may')} 2022
      </Typography>
      <Typography variant="body1" sx={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: 'bold', color: theme.palette.text.primary, display: 'inline-block' }}>
        {t('job1')}
        <IconButton
          href="https://www.mahle.com/en/about-mahle/locations/6104.jsp"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle' }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Typography>
      <Typography variant="body2" sx={{ fontSize: isMobile ? '0.875rem' : '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
        {t('job1Description')}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body1" sx={{ fontSize: isMobile ? '0.875rem' : '1rem', color: theme.palette.text.secondary, marginBottom: '10px', marginTop: '20px' }}>
        {t('february')} 2023 - {t('july')} 2023
      </Typography>
      <Typography variant="body1" sx={{ fontSize: isMobile ? '1rem' : '1.25rem', fontWeight: 'bold', color: theme.palette.text.primary, display: 'inline-block' }}>
        {t('job2')}
        <IconButton
          href="https://www.kassua.cz/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.text.primary, marginLeft: 1, verticalAlign: 'middle' }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Typography>
      <Typography variant="body2" sx={{ fontSize: isMobile ? '0.875rem' : '1rem', color: theme.palette.text.secondary, marginTop: '5px' }}>
        {t('job2Description')}
      </Typography>
    </Box>
  );
};

export default Experience;
