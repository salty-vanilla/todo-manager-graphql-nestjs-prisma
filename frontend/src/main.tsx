import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import CognitoAuthProvider from './components/CognitoAuthProvider';
import AuthConfig from './config/auth';

import App from './App'
import './index.css'
import theme from './theme';
import { CookiesProvider } from 'react-cookie';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CookiesProvider>
          <CognitoAuthProvider {...AuthConfig}>
            <App />
          </CognitoAuthProvider>
        </CookiesProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
