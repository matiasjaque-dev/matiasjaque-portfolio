import React from 'react';
import { Button, Link, Stack } from '@mui/material';
import { Download, Email, GitHub, LinkedIn, Phone } from '@mui/icons-material';
import { profile } from '../data/profile';
import { ui } from '../data/ui';
import { useLocale } from '../context/LocaleContext';
import SectionHeading, { Section } from './SectionHeading';

const ContactSection = () => {
  const { t } = useLocale();
  const cvHref = t(profile.cvPath);

  return (
    <Section id="contact" bgcolor="grey.100">
      <SectionHeading
        id="contact"
        title={t(ui.contact.title)}
        subtitle={t(ui.contact.subtitle)}
      />
      <Stack
        direction="row"
        flexWrap="wrap"
        useFlexGap
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          component={Link}
          href={`mailto:${profile.email}`}
          aria-label={t(ui.contact.email)}
          startIcon={<Email />}
          color="inherit"
        >
          {profile.email}
        </Button>
        <Button
          component={Link}
          href={profile.phoneHref}
          aria-label={t(ui.contact.phone)}
          startIcon={<Phone />}
          color="inherit"
        >
          {profile.phone}
        </Button>
        <Button
          component={Link}
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHub />}
          color="inherit"
        >
          {profile.githubLabel}
        </Button>
        <Button
          component={Link}
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<LinkedIn />}
          color="inherit"
        >
          {profile.linkedinLabel}
        </Button>
        <Button
          variant="contained"
          startIcon={<Download />}
          href={cvHref}
          download
          aria-label={t(ui.contact.cv)}
        >
          {t(ui.contact.cv)}
        </Button>
      </Stack>
    </Section>
  );
};

export default ContactSection;
