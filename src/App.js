import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import './App.css';

import Navbar from './Navbar';

function App() {
  return (
    <div>
      <AppBar color="primary" position="static">
        <ToolBar>
          <Typography variant="h4" component="h1" color="inherit">
            My Header
          </Typography>
          <Navbar />
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default App;
