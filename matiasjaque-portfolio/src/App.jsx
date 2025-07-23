import Header from './components/Header';
import React from 'react';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import { getTheme } from './styles/theme';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = getTheme(prefersDarkMode ? 'dark' : 'light');

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
