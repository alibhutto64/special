import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography:{
    htmlFontSize: 18,
    h5:{
      fontSize: '1.25rem'
    }
  }
  // components: {
  //   MuiCard: {
  //     styleOverrides: {
  //       root: {
  //         display: 'flex',
  //         flexDirection: 'column',
  //         justifyContent: 'space-between',
  //       }
  //     }
  //   }
  // }
});

export default theme;