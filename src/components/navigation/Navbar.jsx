import React from 'react'
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Search from '../Search';






function Navbar({ search, setSearch, loggedIn, logoutUser }) {

  function logout(event){
    event.preventDefault();
    logoutUser();
  }


  function loggedInLinks(){
    return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img 
          src="https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png" 
          alt="crypto-gecko-pic"
          height="30"
          width="30"
          align= "left"
          />
          Crypto Gecko
        </Typography>
          <Button color="inherit" to="/" component={ Link }>Home</Button>
          <Button color="inherit" onClick={ logout }>Logout</Button>
          <Search search={search} setSearch={setSearch}/>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    )
  }


  function loggedOutLinks(){
    return (
  <div>
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img 
          src="https://static.coingecko.com/s/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png" 
          alt="crypto-gecko-pic"
          height="30"
          width="30"
          align= "left"
          />
          Crypto Gecko
      </Typography>
        <Button color="inherit" to="/" component={ Link }>Home</Button>
        <Button color="inherit" to="/login" component={ Link }>Login</Button>
        <Button color="inherit" to="/signup" component={ Link }>Signup</Button>
      </Toolbar>
    </AppBar>
  </Box>
  </div>
    )
  }


  return (
  <div>
    { loggedIn ? loggedInLinks() : loggedOutLinks() }
  </div>
  )
}

export default Navbar;