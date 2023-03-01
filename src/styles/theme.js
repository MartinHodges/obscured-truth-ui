import { createTheme } from '@mui/material/styles';
import colors from './colors';

export const theme = createTheme({
  page: {
    '@media (min-width:600px)': {
      fontSize: '4.5rem',
    },
  },
  palette: {
    primary: {
      light: colors.primary,
      main: colors.primary,
      dark: colors.primary,
      contrastText: '#fff',
    },
    secondary: {
      light: colors['mono50'],
      main: colors['mono100'],
      dark: colors['mono500'],
      contrastText: '#fff',
    },
    error: {
      light: colors['red300'],
      main: colors['red600'],
      dark: colors['red600'],
      contrastText: '#fff',
    },
    custom: {
      light: colors['mono50'],
      main: colors['mono00'],
      dark: colors['red600'],
      contrastText: '#fff',
    },
    background: {
      default: '#F4F4F4',
    },
  },
  typography: {
    htmlFontSize: 14,
    fontWeightRegular: '400',
    useNextVariants: true,
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
  },
  overrides: {
    MuiStepIcon: {
      root: {
        width: '24px',
        height: '24px',
      },
      text: {
        fontSize: '12px',
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '12px',
      },
    },
    MuiGrid: {
      item: {
        padding: '0 8px',
      },
    },
    MuiAppBar: {},
    MuiTableRow: {
      hover: {
        '&:hover': {
          backgroundColor: `${colors.hover} !important`,
        },
      },
    },
    MuiToolBar: {
      height: '48px',
      backgroundColor: '#ffffff',
    },
    MuiButton: {
      text: {
        color: colors.primary,
        fontSize: '12px',
        lineHeight: '12px',
        height: '32px',
        fontWeight: '500',
      },
      label: {
        '&:disabled': {
          color: colors['mono400'],
        },
      },
      contained: {
        borderRadius: '4px',
        backgroundColor: colors.primary,
        boxShadow: 'none',
        color: 'white',
        fontSize: '14px',
        textTransform: 'none',
        fontWeight: 'normal',
        lineHeight: '14px',
        minHeight: '32px',
        minWidth: '80px',
        '&:disabled': {
          backgroundColor: colors.secondary,
        },
        '&:hover': {
          backgroundColor: colors.hover,
        },
      },
      outlined: {
        borderRadius: 4,
        fontVariantCaps: 'normal',
        textTransform: 'none',
        border: '1px solid',
        borderColor: colors.primary,
        padding: '3px 16px',
        fontSize: '13px',
        fontWeight: 'normal',
        color: colors.primary,
        minWidth: '80px',
        minHeight: '32px',
      },
    },
    MuiInput: {
      underline: {
        '&:before': {
          borderBottom: 'none !important',
        },
        '&:after': {
          borderBottom: 'none !important',
        },
      },
    },
    MuiInputBase: {
      input: {
        fontSize: '14px',
      },
      root: {
        fontSize: '14px',
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: '14px',
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: 'translate(14px, 9px) scale(1)',
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: colors.primary,
        '&:hover': {
          borderColor: colors.primary,
        },
      },
      root: {
        borderColor: colors.primary,
        fontSize: '14px',
        fontWeight: '400',
        '&:hover': {
          borderColor: colors.primary,
        },
      },
      input: {
        padding: '8px',
        fontWeight: '400',
        borderColor: colors.primary,
      },
      multiline: {
        padding: '8px',
      },
    },
    MuiTextField: {
      root: {
        fontSize: '14px',
      },
    },
    MuiMenuItem: {
      root: {
        minHeight: '32px',
        fontWeight: '400',
        fontSize: '14px',
      },
    },
    MuiTab: {
      root: {
        '@media (min-width:960px)': {
          minWidth: 'none',
        },
        maxWidth: 'none',
      },
      wrapper: {
        display: 'block',
      },
    },
    MuiList: {
      padding: {
        paddingTop: '0',
        paddingBottom: '0',
      },
    },
    MuiDialogTitle: {
      root: {
        fontSize: '28px',
        fontWeight: '500',
        color: colors.primary,
      }
    },
    MuiTypography: {
      h1: {
        color: colors['grey800'],
        fontSize: '28px',
        fontWeight: '500',
        lineHeight: '40px',
        '@media (max-width:600px)': {
          fontSize: '20px',
        },
      },
      h2: {
        color: colors['grey800'],
        fontSize: '20px',
        fontWeight: '500',
        lineHeight: '40px',
        '@media (max-width:600px)': {
          fontSize: '18px',
        },
      },
      h3: {
        color: colors['grey800'],
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '32px',
        '@media (max-width:600px)': {
          fontSize: '16px',
        },
      },
      h4: {
        color: colors['grey800'],
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '32px',
        '@media (max-width:600px)': {
          fontSize: '16px',
        },
      },
      // question
      h5: {
        color: colors['grey800'],
        fontSize: '15px',
        fontWeight: '500',
      },
      // question
      subtitle1: {
        color: colors['grey800'],
        fontSize: '14px',
        fontWeight: 'bold',
      },
      subtitle2: {
        color: colors['grey800'],
        fontSize: '14px',
        fontWeight: '500',
      },
      // body text
      body1: {
        color: colors['grey800'],
        fontSize: '14px',
      },
      // small text
      body2: {
        color: colors['mono600'],
        fontSize: '13px',
      },
    },
  },
});

export default theme;
