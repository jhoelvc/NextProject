import '@/styles/globals.css'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

let themeRapifacLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3bafda',
      light: '#8fd4ef',
      dark: '#0581b0',
      contrastText: '#F5F5F5',
    },
    secondary: {
      main: '#2b9bd8',
      contrastText: '#F5F5F5',
    },
    success: {
      main: '#00b19d',
      contrastText: '#F5F5F5',
    },
    danger: {
      main: '#ef5350',
      contrastText: '#F5F5F5',
    },
    background: {
      default: '#f5f5f5',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#212121',
      secondary: '#212121',
      disabled: '#212121',
      hint: '#212121',
    },
  },
});

let themeRapifacDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3bafda',
      light: '#8fd4ef',
      dark: '#0581b0',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#2b9bd8',
      contrastText: '#ffffff',
    },
    success: {
      main: '#00b19d',
      contrastText: '#ffffff',
    },
    danger: {
      main: '#ef5350',
      contrastText: '#ffffff',
    },
    background: {
      default: '#182736',
      paper: '#1f2e3b',
    },
    text: {
      primary: 'rgba(255,255,255,0.75)',
      secondary: 'rgba(255,255,255,0.5)',
      disabled: 'rgba(255,255,255,0.25)',
      hint: 'rgba(255,255,255,0.25)',
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={themeRapifacDark}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
