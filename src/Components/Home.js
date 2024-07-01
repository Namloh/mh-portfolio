import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box id="home" sx={{ padding: '50px 0' }}>
      <Typography variant="h2">Home</Typography>
      <Typography variant="body1">Welcome to my portfolio!</Typography>
    </Box>
  );
};

export default Home;
