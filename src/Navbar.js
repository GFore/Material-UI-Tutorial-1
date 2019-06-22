import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core/';

function Navbar(props) {
  return (
    <List component="nav">
      <ListItem component="div">
          <ListItemText inset><Typography color="inherit" variant="h5">Home</Typography></ListItemText>
          <ListItemText inset><Typography color="inherit" variant="h5">Posts</Typography></ListItemText>
          <ListItemText inset><Typography color="inherit" variant="h5">Contact</Typography></ListItemText>
      </ListItem>
    </List>
  );
}

export default Navbar;