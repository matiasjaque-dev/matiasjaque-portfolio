import React from 'react';
import { Box, CssBaseline, Link, ThemeProvider } from '@mui/material';
import { getTheme } from './styles/theme';
import { LocaleProvider, useLocale } from './context/LocaleContext';
import { ui } from './data/ui';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const theme = getTheme('light');

function SkipLink() {
  const { t } = useLocale();

  return (
    <Link
      href="#main"
      sx={{
        position: 'absolute',
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: 0,
        zIndex: (muiTheme) => muiTheme.zIndex.modal + 1,
        bgcolor: 'background.paper',
        color: 'text.primary',
        '&:focus': {
          width: 'auto',
          height: 'auto',
          margin: 0,
          clip: 'auto',
          overflow: 'visible',
          px: 2,
          py: 1,
          left: 16,
          top: 16,
        },
      }}
    >
      {t(ui.skipToContent)}
    </Link>
  );
}

function AppShell() {
  return (
    <>
      <SkipLink />
      <Header />
      <Box component="main" id="main">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <EducationSection />
        <ContactSection />
      </Box>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocaleProvider>
        <AppShell />
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
