import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import './App.css';

import Navbar from './Navbar';
import Posts from './Posts';

const menuList = ['Home', 'Posts', 'Contact'];

function App() {
  return (
    <div>
      <AppBar color="primary" position="static">
        <ToolBar>
          <Typography variant="h4" component="h1" color="inherit">My Header</Typography>
          <Navbar menuList={menuList} />
        </ToolBar>
      </AppBar>
      <Posts />
    </div>
  );
}

export default App;
