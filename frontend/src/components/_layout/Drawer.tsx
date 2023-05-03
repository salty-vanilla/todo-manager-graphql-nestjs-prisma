import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer as MuiDrawer,
  Toolbar,
  Box,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import routes from '../../routes';
import { useApolloUser } from '../../types/ApolloUserContext';
import { TeamCreateDialog } from '../TeamCreateDialog';

const drawerWidth = 240;

const Drawer = () => {
  const { user } = useApolloUser();
  const [ createTeamDialogOpen, setCreateTeamDialogOpen] = React.useState(false);

  React.useEffect(() => {
    console.log(user);

  }, [user]);

  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <List>
        {user.teams && user.teams.map((teamInfo, index) => (
          <ListItem key={index}>
            <ListItemButton>
              <ListItemText primary={teamInfo.name}/>
            </ListItemButton>
          </ListItem>
          )
        )}
        <ListItem>
          <ListItemButton onClick={() => {setCreateTeamDialogOpen(true)}}>
            <AddIcon />
          </ListItemButton>
        </ListItem>
      </List>
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
    <TeamCreateDialog open={createTeamDialogOpen} setOpen={setCreateTeamDialogOpen}/>
    </MuiDrawer>
  )
}

export default Drawer;
