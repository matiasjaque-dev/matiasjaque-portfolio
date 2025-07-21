// components/Footer.jsx

import { Box, Typography, Fade } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Fade in timeout={600}>
      <Box
        component="footer"
        role="contentinfo"
        sx={{
          py: { xs: 2, md: 3 },
          px: 2,
          textAlign: 'center',
          backgroundColor: 'primary.main',
          color: 'white',
          mt: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontSize: { xs: '0.85rem', md: '0.95rem' } }}
        >
          © {new Date().getFullYear()} Matias Jaque. Todos los derechos
          reservados.
        </Typography>
        <Typography
          component="p"
          variant="caption"
          sx={{ opacity: 0.8, fontSize: { xs: '0.75rem', md: '0.85rem' } }}
        >
          Construido con React, MUI y pasión por el desarrollo.
        </Typography>
      </Box>
    </Fade>
  );
};

export default Footer;
