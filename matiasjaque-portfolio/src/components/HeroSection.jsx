import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { profile } from '../data/profile';
import { ui } from '../data/ui';
import { useLocale } from '../context/LocaleContext';

const HeroSection = () => {
  const { t } = useLocale();

  return (
    <Box
      component="section"
      id="hero"
      aria-labelledby="hero-heading"
      sx={{ py: { xs: 6, md: 10 }, scrollMarginTop: 80 }}
    >
      <Container>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
        >
          <Box
            component="img"
            src={profile.photo}
            alt={t(profile.photoAlt)}
            sx={{
              width: { xs: 168, md: 220 },
              height: { xs: 168, md: 220 },
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center top',
              boxShadow: 3,
              flexShrink: 0,
            }}
          />
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              id="hero-heading"
              component="h1"
              variant="h3"
              fontWeight={700}
              sx={{ fontSize: { xs: '2rem', md: '2.75rem' } }}
            >
              {profile.name}
            </Typography>
            <Typography
              component="p"
              variant="h6"
              color="text.secondary"
              fontWeight={500}
              sx={{ mt: 1 }}
            >
              {t(profile.role)}
            </Typography>
            <Typography
              component="p"
              variant="body1"
              sx={{ mt: 2, maxWidth: 560, mx: { xs: 'auto', md: 0 }, lineHeight: 1.7 }}
            >
              {t(profile.heroIntro)}
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              sx={{ mt: 3 }}
            >
              <ScrollLink to="projects" smooth duration={500} offset={-80}>
                <Button variant="contained">{t(ui.hero.ctaProjects)}</Button>
              </ScrollLink>
              <ScrollLink to="contact" smooth duration={500} offset={-80}>
                <Button variant="outlined">{t(ui.hero.ctaContact)}</Button>
              </ScrollLink>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
