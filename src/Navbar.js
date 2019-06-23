import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core/';
import { AccountBox, Book, Home } from '@material-ui/icons/';

const MenuItems = ({ menuList }) => {
  return menuList.map((menuItem, i) => {
    return (
      <ListItemText inset key={i}>
        <Typography color="inherit" variant="h5">
          {menuItem === 'Home' ? 
              <Home />
            : menuItem === 'Posts' ?
              <Book />
            : <AccountBox />
          } {`${menuItem}`}
        </Typography>
      </ListItemText>
    );
  });
}

function Navbar(props) {
  return (
    <List component="nav">
      <ListItem component="div">
        <MenuItems menuList={['Home', 'Posts', 'Contact']} />
      </ListItem>
    </List>
  );
}

export default Navbar;