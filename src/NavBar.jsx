import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import NavTabs from './NavTabs';

const NavBar = () => {
  var navBarStyles = {
    height: '100px',
    width: '1000px',
    margin: 'auto',
    paddingBottom: '178px'
  }

  var logoStyles = {
    height: '80px',
    marginTop: '50px',
  }

  return(
    <div style={navBarStyles}>
      <AppBar style={{ backgroundColor: '#000000' }} position="static">
        <img width='1000' src={require('./assets/navbarad.png')}/>
        <Toolbar>
          <div style={logoStyles}>
            <img height='80px' src={require("./assets/logo.png")} alt="IMDB Logo"/>
          </div>
          <NavTabs/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar;
