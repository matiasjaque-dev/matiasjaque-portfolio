import { createTheme } from '@mui/material/styles';

export const getTheme = (mode = 'light') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#111111' : '#FFFFFF',
      },
      secondary: {
        main: mode === 'light' ? '#333333' : '#DDDDDD',
      },
      background: {
        default: mode === 'light' ? '#FFFFFF' : '#111111',
        paper: mode === 'light' ? '#FFFFFF' : '#1A1A1A',
      },
      text: {
        primary: mode === 'light' ? '#111111' : '#FFFFFF',
      },
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@media (prefers-reduced-motion: reduce)': {
            '*, *::before, *::after': {
              animationDuration: '0.01ms !important',
              animationIterationCount: '1 !important',
              transitionDuration: '0.01ms !important',
              scrollBehavior: 'auto !important',
            },
          },
        },
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            '&:focus-visible': {
              outline: '2px solid currentColor',
              outlineOffset: 2,
            },
          },
        },
      },
    },
  });
