import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

const Studies = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box id="studies" sx={{ padding: '50px 0' }}>
      <Typography variant="h2" sx={{ fontSize: isMobile ? '2rem' : '2.5rem' }}>
        Studies
      </Typography>
      <Typography variant="body1" sx={{ fontSize: isMobile ? '0.875rem' : '1rem' }}>
        Welcome to my portfolio!
      </Typography>
    </Box>
  );
};

export default Studies;
