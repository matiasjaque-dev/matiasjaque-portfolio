import React from 'react';
import { Box, Typography } from '@mui/material';
import { profile } from '../data/profile';
import { ui } from '../data/ui';
import { useLocale } from '../context/LocaleContext';
import SectionHeading, { Section } from './SectionHeading';

const AboutSection = () => {
  const { t } = useLocale();

  return (
    <Section id="about" bgcolor="grey.100">
      <SectionHeading
        id="about"
        title={t(ui.about.title)}
        subtitle={t(ui.about.subtitle)}
      />
      <Box sx={{ maxWidth: 720, mx: 'auto', textAlign: 'center' }}>
        <Typography variant="body1" sx={{ lineHeight: 1.75 }}>
          {t(profile.summary)}
        </Typography>
      </Box>
    </Section>
  );
};

export default AboutSection;
