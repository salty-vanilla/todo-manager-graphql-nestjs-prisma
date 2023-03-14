import { Inbox } from '@mui/icons-material';
import { Avatar, Icon, ListItem, ListItemAvatar, ListItemText, makeStyles } from '@mui/material';

import { BacklogItem } from '../types/BacklogItem';
import BacklogItemComponent from './BacklogItemComponent';

type Props = {
  title: string;
  filter: string;
  items: Array<BacklogItem>;
};

const BacklogList = ({title, filter, items}: Props) => {
  return (
    <div>
      <h4>{title}</h4>
      <div style={{
        backgroundColor: 'lightgray',
        borderRadius: '6px',
        padding: '10px'
      }}>
        {
          items.map((item, index) => (
            <BacklogItemComponent
              item={item}
            />
            )
          )
        }
      </div>
    </div>
  )
}

export default BacklogList;
