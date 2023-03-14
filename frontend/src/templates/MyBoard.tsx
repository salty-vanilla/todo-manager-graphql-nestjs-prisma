import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import BacklogList from '../components/BacklogList';
import { BacklogItem } from '../types/BacklogItem';
import BacklogItemDialog from '../components/BacklogItemDialog';

const items: Array<BacklogItem> = [
  {
    name: "部材発注",
    description: "キーボード，マウス，モニター",
    projectInfo: {
      id: "1",
      name: "案件A",
      description: ""
    },
    assignedUserInfo: {
      id: "1",
      name: "Alice"
    },
  },
  {
    name: "資料作成",
    description: "",
    projectInfo: {
      id: "2",
      name: "案件B",
      description: ""
    },
    assignedUserInfo: {
      id: "1",
      name: "Alice"
    },
  },
  {
    name: "光学系実験",
    description: "バー照明，リング照明",
    projectInfo: {
      id: "1",
      name: "案件A",
      description: ""
    },
    assignedUserInfo: {
      id: "1",
      name: "Alice"
    },
  },
];

const MyBoard = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  }
  const handleCloseDialog = () => {
    setOpenDialog(false);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Button
        variant="contained"
        endIcon={<AddIcon />}
        onClick={handleClickOpenDialog}
      >
        New Item
      </Button>
      <BacklogItemDialog
        open={openDialog}
        onClose={handleCloseDialog}
      />
      <Grid container spacing={4}>
        <Grid item xs={6} md={4}>
          <BacklogList
            title="全バックログ"
            filter=""
            items={items}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <BacklogList
            title="進行中"
            filter=""
            items={items}
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <BacklogList
            title="完了済み"
            filter=""
            items={items}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MyBoard;
