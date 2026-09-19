import React from 'react';
import { Box, Typography } from '@mui/material';
import { profile } from '../data/profile';
import { ui } from '../data/ui';
import { useLocale } from '../context/LocaleContext';

const Footer = () => {
  const { t } = useLocale();

  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 2.5, md: 3 },
        px: 2,
        textAlign: 'center',
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} {profile.name}. {t(ui.footer.rights)}
      </Typography>
      <Typography variant="caption" sx={{ display: 'block', mt: 0.5, opacity: 0.8 }}>
        {t(ui.footer.builtWith)}
      </Typography>
    </Box>
  );
};

export default Footer;
