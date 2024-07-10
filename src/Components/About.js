import React from 'react';
import { Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';

const About = ({ isMobile }) => {
  const { t } = useTranslation();

  const calculateAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  const age = calculateAge(2005);

  return (
    <Box id="about" sx={{ mb: 8 }}>
      <Typography variant="h1" fontSize={isMobile ? "3rem" : "5.5rem"} mb={4} mt={4}>
        <TypeAnimation
          key={t('welcome')}
          sequence={[t('welcome')]}
          speed={0}
          wrapper="span"
          cursor={true}
          repeat={0}
        />
      </Typography>

      <Typography variant="p" fontSize={isMobile ? 18 : 21}>
        {t('introduction', { age })}
      </Typography>

      <Typography variant="body1" fontSize={isMobile ? 18 : 21} mt={2}>
        <span dangerouslySetInnerHTML={{ __html: t('aboutText') }} />
      </Typography>
    </Box>
  );
};

export default About;
