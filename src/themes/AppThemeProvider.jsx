import { pink } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 500,
    },
    h2: {
      fontSize: 26,
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: 24,
      textTransform: 'capitalize',
    },
    subtitle1: {
      fontSize: 17,
      textTransform: 'capitalize',
    },
  },
  palette: {
    primary: {
      main: "#191A1C",
      optional: "#ffffff",
    },
    secondary: {
      main: pink[700],
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        sx: {
          px: 1,
        },
        variant: 'subtitle2',
        textTransform: 'capitalize',
      },
    },
    MuiStack: {
      defaultProps: {
        sx: {
          px: 2,
          py: 1,
        },
        spacing: 2,
        direction: 'row',
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiLink: {
      defaultProps: {
        sx: {
          color: (theme) => theme.palette.primary.main,
        },
        underline: 'none',
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'small',
        p: 0,
        disableRipple: true,
      },
      variant: 'text',
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

const AppThemeProvider = (prop) => {
  return <ThemeProvider theme={theme}> {prop.children} </ThemeProvider>;
};

export default AppThemeProvider;