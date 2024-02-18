import React from 'react';
import Image from 'next/image';
import logo from '../images/nawy.svg';
import { AppBar, Toolbar, Button } from '@mui/material';

//sx prop is a style shorthand 

// Common style for buttons
const buttonStyle = {
    color: 'black',
  };
function Nav() {
    return (
      <AppBar position="static" sx={{backgroundColor:"white"}}>
        <Toolbar >
        <Image src={logo} alt="Nawy Logo" width={100} height={50}/>
        <div className='nav-text'>
        <Button sx={buttonStyle}>About</Button>
        <Button sx={buttonStyle}>Home</Button>
        <Button sx={buttonStyle}>Services</Button>
        <Button sx={buttonStyle}>Contact</Button>
        </div>
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Nav;