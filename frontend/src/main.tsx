import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import AuthorizedUrqlProvider from './components/AuthorizedUrqlProvider';
import {
  AUTH0_AUDIENCE,
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN,
  AUTH0_REDIRECT_URI,
} from './config/constants';

import App from './App'
import './index.css'
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Auth0Provider
        domain={AUTH0_DOMAIN}
        clientId={AUTH0_CLIENT_ID}
        authorizationParams={
          {
            audience: AUTH0_AUDIENCE,
            redirect_uri: AUTH0_REDIRECT_URI,
          }
        }
      >
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <AuthorizedUrqlProvider>
              <App />
            </AuthorizedUrqlProvider>
          </ThemeProvider>
        </BrowserRouter>
      </Auth0Provider>
    </React.StrictMode>,
)
