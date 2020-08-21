import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    fontFamily: 'Inter, Arial, Helvetica, sans-serif',
  },
  palette: {
    primary: {
      main: '#E84F83',
      contrastText: '#000',
    },
    secondary: {
      main: '#191D3A',
      contrastText: '#fff',
    },
    type: 'dark',
  },
});

theme = responsiveFontSizes(theme);

export default theme;
