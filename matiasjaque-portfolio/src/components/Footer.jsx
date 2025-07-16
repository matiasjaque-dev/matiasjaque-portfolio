// components/Footer.jsx

import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        textAlign: 'center',
        backgroundColor: 'primary.main',
        color: 'white',
        mt: 4,
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Matias Jaque. Todos los derechos
        reservados.
      </Typography>
      <Typography variant="caption" sx={{ opacity: 0.8 }}>
        Construido con React, MUI y pasión por el desarrollo.
      </Typography>
    </Box>
  );
};

export default Footer;
