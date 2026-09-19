import React from 'react';
import { Box, Chip, Stack, Typography } from '@mui/material';
import { experience } from '../data/experience';
import { ui } from '../data/ui';
import { useLocale } from '../context/LocaleContext';
import SectionHeading, { Section } from './SectionHeading';

const ExperienceSection = () => {
  const { t } = useLocale();

  return (
    <Section id="experience" bgcolor="grey.100">
      <SectionHeading
        id="experience"
        title={t(ui.experience.title)}
        subtitle={t(ui.experience.subtitle)}
      />
      <Stack spacing={3} sx={{ maxWidth: 800, mx: 'auto' }}>
        {experience.map((job) => (
          <Box
            key={job.id}
            component="article"
            sx={{
              p: { xs: 2.5, md: 3 },
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Typography component="h3" variant="h6" fontWeight={700}>
              {t(job.role)}
            </Typography>
            <Typography component="p" variant="subtitle1" color="text.secondary">
              {t(job.company)}
            </Typography>
            <Typography component="p" variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {t(job.period)} · {t(job.location)}
            </Typography>
            <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1} sx={{ mt: 1.5 }}>
              {job.stack.map((item) => (
                <Chip key={item} label={item} size="small" />
              ))}
            </Stack>
            <Box component="ul" sx={{ mt: 1.5, mb: 0, pl: 2.5 }}>
              {t(job.highlights).map((item) => (
                <Typography key={item} component="li" variant="body2" sx={{ mb: 0.75 }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Stack>
    </Section>
  );
};

export default ExperienceSection;
