import 'reset-css';
import 'animate.css';
import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
// import reportWebVitals from './reportWebVitals';
import ScrollToTop from "./ScrollToTop";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import { HelmetProvider } from 'react-helmet-async';
import 'dotenv';

const breakpoints = createBreakpoints({})

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "Poppins"
        }
      }
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h2: {
      padding: '1rem',
      fontWeight: 'bold',
      fontSize: '64px',
      [breakpoints.down("md")]: {
        fontSize: "40px"
      },
    },
    h4: {
      fontWeight: '600',
      paddingTop: '16px',
      paddingBottom: '16px'
    },
    h5: {
      fontWeight: 'bold'
    },
    checkoutTitle: {
      backgroundColor: '#062841',
      color: 'white'
    }
  },
  palette: {
    primary: {
      main: '#062841', //darkblue
    },
    secondary: {
      main: '#c9a32c' //gold
    },
    tertiary: {
      main: 'whitesmoke' //lightgray
    }
  },
  pageSection: {
    height: '52rem'
  },
  yellowButton: {
    fontWeight: 800,
    borderRadius: '40px',
    height: 56,
    backgroundColor: '#c9a32c',
    ':hover': { backgroundColor: '#062841' }
  }
});

const gatesApp = (
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);

const rootElement = document.getElementById("topRoot");
render(gatesApp, rootElement);
// if (rootElement.hasChildNodes()) {
//   hydrate(gatesApp, rootElement);
// } else {
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals(console.log);