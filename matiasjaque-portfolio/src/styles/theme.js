// theme.js
import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) =>
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
        paper: mode === 'light' ? '#FFFFFF' : '#111111',
      },
      text: {
        primary: mode === 'light' ? '#111111' : '#FFFFFF',
      },
      accent: {
        main: mode === 'light' ? '#007BFF' : '#4EA8FF',
      },
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
    },
  });
