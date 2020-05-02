import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f08e0e',
      light: '#f5ae51',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#000000'
    },
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      primaryMediumEmphasis: 'rgba(0, 0, 0, 0.6)',
      secondary: 'rgba(255, 1, 60, 1)',
      secondaryMediumEmphasis: 'rgba(255, 255, 255, 0.6)'
    }
  },
  typography: {
    subtitle1: { fontWeight: 500 }
  }
});
