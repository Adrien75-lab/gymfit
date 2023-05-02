import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A237E',
    },
    secondary: {
      main: '#FFC107',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 20,
        fontWeight: 500,
        textTransform: 'none',
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#152a4b',
        },
      },
    },
    MuiTextField: {
      root: {
        borderRadius: 20,
      },
    },
  },
});

export default theme;