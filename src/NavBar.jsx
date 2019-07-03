import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import NavTabs from './NavTabs';

const NavBar = () => {
  var navBarStyles = {
    height: '100px'
  }

  var logoStyles = {
    height: '80px',
    marginTop: '50px',
    border: '5px solid red'
  }

  var botRowStyles = {
    border: '5px solid red'
  }

  return(
    <div style={navBarStyles}>
      <AppBar style={{ backgroundColor: '#000000' }} position="static">
        <Toolbar>
          <div style={logoStyles}>
            <img height='80px' src={require("./assets/logo.png")} alt="IMDB Logo"/>
          </div>
          <div style={botRowStyles}>
            <NavTabs/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;
