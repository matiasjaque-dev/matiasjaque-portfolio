import React from 'react';
import { Box, Typography } from '@mui/material';
import { education } from '../data/education';
import { ui } from '../data/ui';
import { useLocale } from '../context/LocaleContext';
import SectionHeading, { Section } from './SectionHeading';

const EducationSection = () => {
  const { t } = useLocale();

  return (
    <Section id="education">
      <SectionHeading id="education" title={t(ui.education.title)} />
      <Box sx={{ maxWidth: 800, mx: 'auto' }}>
        {education.map((item) => (
          <Box
            key={item.id}
            component="article"
            sx={{
              p: { xs: 2.5, md: 3 },
              bgcolor: 'grey.100',
              borderRadius: 2,
            }}
          >
            <Typography component="h3" variant="h6" fontWeight={700}>
              {t(item.degree)}
            </Typography>
            <Typography component="p" variant="subtitle1" color="text.secondary">
              {t(item.school)}
            </Typography>
            <Typography component="p" variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {t(item.period)} · {t(item.location)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  );
};

export default EducationSection;
