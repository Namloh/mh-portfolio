import React, { useState } from 'react';
import { Box, Typography, Link, IconButton, useMediaQuery, Snackbar, Alert } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('holmmatej@gmail.com');
    setOpen(true);
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        padding: '20px',
        textAlign: 'center',
        marginTop: '20px',
        borderTop: '1px solid',
        borderColor: 'divider',
        width: '100%', // Full width by default
        position: 'relative', // Ensure the footer stays within the main content area
        ...(isMobile && {
          marginLeft: 0, // No margin on mobile
          marginRight: 0, // No margin on mobile
          width: '100%', // Full width on mobile
        }),
        ...(!isMobile && {
          marginRight: '240px', // Adjusted for the sidebar width on larger screens
          width: `calc(100% - 240px)`, // Ensure the width excludes the sidebar width on larger screens
        }),
      }}
    >
      <Typography variant="h5" color="text.primary" gutterBottom>
        {t('contactMe')}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Box
          onClick={handleCopyEmail}
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: isMobile ? '10px' : 0,
            marginRight: isMobile ? 0 : '16px',
            cursor: 'pointer'
          }}
        >
          <IconButton aria-label="email" color="inherit">
            <EmailIcon />
          </IconButton>
          <Typography variant="body1" color="text.primary" sx={{ marginLeft: '8px', textDecoration: 'underline' }}>
            holmmatej@gmail.com
          </Typography>
        </Box>
        <Link href="tel:+420608611199" color="inherit" sx={{ display: 'flex', alignItems: 'center', marginBottom: isMobile ? '10px' : 0, marginRight: isMobile ? 0 : '16px' }}>
          <IconButton aria-label="phone" color="inherit">
            <PhoneIcon />
          </IconButton>
          <Typography variant="body1" color="text.primary" sx={{ marginLeft: '8px' }}>
            +420 608 611 199
          </Typography>
        </Link>
        <Link href="https://github.com/Namloh" target="_blank" rel="noopener noreferrer" color="inherit" sx={{ display: 'flex', alignItems: 'center', marginBottom: isMobile ? '10px' : 0 }}>
          <IconButton aria-label="github" color="inherit">
            <GitHubIcon />
          </IconButton>
          <Typography variant="body1" color="text.primary" sx={{ marginLeft: '8px' }}>
            github.com/Namloh
          </Typography>
        </Link>
      </Box>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={{ 
            width: '100%', 
            backgroundColor: 'background.default', 
            color: 'text.primary' 
          }}
        >
          Email address copied to clipboard!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
