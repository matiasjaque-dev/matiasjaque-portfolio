import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6366F1', // Indigo
    },
    secondary: {
      main: '#A855F7', // Purple
    },
    background: {
      default: '#F9FAFB', // Light Gray
    },
    text: {
      primary: '#111827', // Gray-900
    },
    accent: {
      main: '#22D3EE', // Cyan
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
  },
});

export default theme;
