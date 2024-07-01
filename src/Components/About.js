import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Box id="about" sx={{ padding: '50px 0' }}>
      <Typography variant="h2">About</Typography>
      <Typography variant="body1">This is the about section.</Typography>
    </Box>
  );
};

export default About;
