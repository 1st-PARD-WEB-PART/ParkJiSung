import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function MyAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
