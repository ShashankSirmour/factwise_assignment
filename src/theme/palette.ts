import { colors } from '@mui/material';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black,
  white,
  primary: {
    contrastText: '#000',
    dark: colors.blue[900],
    main: colors.grey[300],
    light: colors.blue.A400,
  },
  secondary: {
    // contrastText: '#000',
    dark: colors.blue[900],
    main: '#fff',
    light: colors.blue.A400,
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: '#000',
    secondary: black,
    link: colors.blue[600],
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  // background: {
  //   default: '#fff',
  //   paper: '#F9F2E7',
  // },
  divider: colors.grey[200],
};
