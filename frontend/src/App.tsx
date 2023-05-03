import * as React from 'react';
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-sans-jp/700.css";
import "@fontsource/montserrat/700.css";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import routes from './routes';
import createApolloClient from './apollo';
import { ApolloProvider } from '@apollo/client';
import Header from './components/_layout/Header';
import ApolloUserProvider from './components/ApolloUserProvider';
import Drawer from './components/_layout/Drawer';

export default function App() {
  const [client] = React.useState(createApolloClient());
  console.log(client);
  return (
    <ApolloProvider client={client}>
      <ApolloUserProvider>
      <div>
        <CssBaseline />
          <Box sx={{ display: 'flex' }}>
            <Header/>
            <Drawer/>

            <Box
              component="main"
              sx={{ flexGrow: 1, p: 3 }}
              style={{minWidth: '800px'}}
            >
              <Toolbar />
                <React.Suspense fallback="loading…">
                  <Routes>
                    {
                      routes.map((route, index) => (
                        <Route
                          key={index}
                          path={route.path}
                          element={<route.element />}
                        />
                        )
                      )
                    }
                  </Routes>
                </React.Suspense>
            </Box>
          </Box>
        </div>
      </ApolloUserProvider>
    </ApolloProvider>
  );
}
