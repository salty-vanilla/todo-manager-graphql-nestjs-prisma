import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Noto Sans JP',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      // light: '#54C527',
      main: '#004643',
      // dark: '#b26a00',
      contrastText: '#ffffff',
    },
    secondary: {
      // light: '#33eb91',
      main: '#D1AC00',
      // dark: '#00a152',
      contrastText: '#ffffff',
    },
    background: {
      default: '#FAF4D3',
    }
  },
  mixins: {
    toolbar: {
      minHeight: 64,
    },
  },
});

export default theme;
