import * as React from 'react';
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/noto-sans-jp/400.css";
import "@fontsource/noto-sans-jp/700.css";
import "@fontsource/montserrat/700.css";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import routes from './routes';

const drawerWidth = 240;

export default function App() {
  return (
    <div>
      <CssBaseline />
      <Box sx={{ display: 'flex' }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              業務管理
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <React.Suspense fallback="loading…">
            <Box sx={{ overflow: 'auto' }}>
              <List>
                {routes.map((route, index) => (
                  route.path !== '/'?
                      <Link to={route.path} key={index}>
                        <ListItem key={index} disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <route.icon />
                            </ListItemIcon>
                            <ListItemText primary={route.label} />
                          </ListItemButton>
                        </ListItem>
                    </Link>
                    :
                    <div></div>
                ))}
              </List>
            </Box>

          </React.Suspense>
        </Drawer>

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
  );
}
