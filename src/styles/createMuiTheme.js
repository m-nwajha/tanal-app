// Create MUI Theme.
import { createTheme } from '@mui/material/styles';

// Import Custom Theme.
import { THEME } from './theme';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: THEME.colors.primary
    },
    secondary: {
      main: THEME.colors.secondary
    }
  },
  typography: {
    fontFamily: THEME.fontFamily.cairo,
    fontSize: 16,

  }
});
