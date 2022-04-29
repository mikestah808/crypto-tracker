import React from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Crypto Gecko
        </Typography>
        <Button color="inherit" to="/" component={ Link }>Home</Button>
        <Button color="inherit" to="/login" component={ Link }>Login</Button>
        <Button color="inherit" to="/signup" component={ Link }>Signup</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar;