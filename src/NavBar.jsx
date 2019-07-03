import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';


const NavBar = () => {
  var navBarStyles = {
    display: 'grid',
    gridTemplateColumns: '15 vw 85vw',
    backgroundColor: 'black',
    height: '10vh'
  }
  var logoStyles = {
    gridColumn: '1',
    gridRow: '1 / 3',
    height: '10vh'
  }
    return(
        <div style={navBarStyles}>
        <AppBar position="static">
            <Toolbar>
              <div style={logoStyles}>
                <img height='50%' src={require("./assets/logo.png")} alt="IMDB Logo"/>
              </div>
                <h3>tabs</h3>
                <input mx="auto"
                  type='text'
                  id='search'
                  placeholder='search'/>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;
