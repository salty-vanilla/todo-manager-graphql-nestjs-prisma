import React from 'react';
import { Inbox } from '@mui/icons-material';
import { Avatar, Box, Grid, Icon, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

import { BacklogItem } from '../types/BacklogItem';

type Props = {
  item: BacklogItem;
};

const BacklogItemComponent = ({item}: Props) => {
  return (
    <ListItem style={{
      backgroundColor: 'white',
      marginTop: '5px',
      marginBottom: '5px',
      borderRadius: '6px',
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
        }}>
          <ListItemText
            primary={item.name}
            secondary={
              <React.Fragment>
                <Typography variant="caption" gutterBottom component="span">{
                  item.description.length > 10 ?
                  item.description.slice(0, 10) + '...' :
                  item.description
                }
                <br />
                </Typography>
              </React.Fragment>
            }
          />


          <Typography variant="caption">{
            item.projectInfo.name
          }
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}>
              <Avatar
                src="https://mui.com/static/images/avatar/3.jpg"
                sx={{ width: 24, height: 24, marginRight: 2}}
              />
              <Typography variant="caption">{item.assignedUserInfo.name}</Typography>
          </Box>
      </Box>
    </ListItem>
  );
};

export default BacklogItemComponent;
