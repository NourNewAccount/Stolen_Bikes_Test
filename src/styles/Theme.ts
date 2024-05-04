import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#12a97c',
      light: '#82dabf',
    },
    secondary: {
      main: '#5a5a5a',  
      dark: '#1f1f1f', 
    },
    common: {
      white: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Handlee',
      'cursive',
    ].join(','),
  },
});

export default theme;
