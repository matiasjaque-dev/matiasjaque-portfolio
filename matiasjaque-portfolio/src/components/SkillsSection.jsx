import React from 'react';
import { Box, Chip, Stack, Typography } from '@mui/material';
import { skillGroups } from '../data/skills';
import { ui } from '../data/ui';
import { useLocale } from '../context/LocaleContext';
import SectionHeading, { Section } from './SectionHeading';

const SkillsSection = () => {
  const { t } = useLocale();

  return (
    <Section id="skills">
      <SectionHeading
        id="skills"
        title={t(ui.skills.title)}
        subtitle={t(ui.skills.subtitle)}
      />
      <Stack spacing={3} sx={{ maxWidth: 800, mx: 'auto' }}>
        {skillGroups.map((group) => (
          <Box key={group.id}>
            <Typography
              component="h3"
              variant="subtitle1"
              fontWeight={700}
              sx={{ mb: 1.25 }}
            >
              {t(group.title)}
            </Typography>
            <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1}>
              {group.items.map((item) => (
                <Chip key={item} label={item} color="primary" variant="outlined" />
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Section>
  );
};

export default SkillsSection;
