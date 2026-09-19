import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { scroller } from 'react-scroll';
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
            width={220}
            height={220}
            decoding="async"
            fetchPriority="high"
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
              <Button
                variant="contained"
                href="#projects"
                onClick={(event) => {
                  event.preventDefault();
                  scroller.scrollTo('projects', { smooth: true, duration: 500, offset: -80 });
                }}
              >
                {t(ui.hero.ctaProjects)}
              </Button>
              <Button
                variant="outlined"
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scroller.scrollTo('contact', { smooth: true, duration: 500, offset: -80 });
                }}
              >
                {t(ui.hero.ctaContact)}
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
