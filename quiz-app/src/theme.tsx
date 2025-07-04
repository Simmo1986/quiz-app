// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      light: '#6ef1ff',
      main: '#00bcd4',      // vibrant teal main
      dark: '#0097a7',      // darker teal
      contrastText: '#fff',
    },

    secondary: {
      light: '#e0e0e0',
      main: '#bdbdbd',      // light grey main
      dark: '#9e9e9e',
      contrastText: '#000',
    },

    error: {
      light: '#ef9a9a',
      main: '#e53935',
      dark: '#b71c1c',
      contrastText: '#fff',
    },

    warning: {
      light: '#ffe082',
      main: '#ffb300',
      dark: '#ff6f00',
      contrastText: '#000',
    },

    info: {
      light: '#81d4fa',
      main: '#29b6f6',
      dark: '#0288d1',
      contrastText: '#fff',
    },

    success: {
      light: '#a5d6a7',
      main: '#43a047',
      dark: '#2e7d32',
      contrastText: '#fff',
    },

    grey: {
      50: '#f9f9f9',
      100: '#f0f0f0',
      200: '#e0e0e0',
      300: '#d1d1d1',
      400: '#b0b0b0',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
    },

    text: {
      primary: '#1a1a1a',
      secondary: '#5f6368',
      disabled: '#9e9e9e',
      hint: '#bdbdbd',
    },

    background: {
      default: '#f5f7fa',
      paper: '#ffffff',
    },

    divider: '#e0e0e0',

    action: {
      active: '#4e4e4e',
      hover: '#f0f0f0',
      hoverOpacity: 0.08,
      selected: '#e0e0e0',
      selectedOpacity: 0.16,
      disabled: '#c7c7c7',
      disabledBackground: '#f2f2f2',
      focus: '#000',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  },

  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',

    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      color: '#1a1a1a',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      color: '#1a1a1a',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
      color: '#1a1a1a',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.5,
      color: '#1a1a1a',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      color: '#1a1a1a',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#1a1a1a',
    },

    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.75,
      color: '#5f6368',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#5f6368',
    },

    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#1a1a1a',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      color: '#5f6368',
    },

    button: {
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.75,
      letterSpacing: '0.02857em',
      textTransform: 'uppercase',
      color: '#00bcd4',
    },

    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      color: '#757575',
    },
    overline: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 2.66,
      letterSpacing: '0.08333em',
      textTransform: 'uppercase',
      color: '#757575',
    },
  },

  spacing: 8,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 6,
          padding: '8px 20px',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#00bcd4',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#0097a7',
          },
        },
        outlinedPrimary: {
          borderColor: '#00bcd4',
          color: '#00bcd4',
          '&:hover': {
            backgroundColor: '#e0f7fa',
            borderColor: '#0097a7',
          },
        },
        textPrimary: {
          color: '#00bcd4',
          '&:hover': {
            backgroundColor: '#e0f7fa',
          },
        },
        containedSecondary: {
          backgroundColor: '#bdbdbd',
          color: '#000',
          '&:hover': {
            backgroundColor: '#9e9e9e',
          },
        },
        outlinedSecondary: {
          borderColor: '#bdbdbd',
          color: '#5f6368',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            borderColor: '#9e9e9e',
          },
        },
        textSecondary: {
          color: '#5f6368',
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
        },
      },
    },
  },
});

export default theme;
