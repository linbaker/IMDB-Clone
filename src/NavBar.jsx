import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';
import NavTabs from './NavTabs';


const NavBar = () => {
  var navBarStyles = {
    display: 'grid',
    gridTemplateColumns: '15 vw 85 vw',
    color: 'black',
    height: '10vh'
  }
  var logoStyles = {
    gridColumn: '1',
    gridRow: '1 / 3',
    height: '10vh',
    marginTop: '5%',
    border: '5px solid red'
  }
  var topRowStyles = {
    gridColumn: '2',
    gridRow: '1/2',
    height: '5vh',
    border: '5px solid red'
  }
  var botRowStyles = {
    gridColumn: '2',
    gridRowStart: '2',
    gridRowEnd: '3',
    height: '5vh',
    border: '5px solid red'
  }
    return(
        <div style={navBarStyles}>
        <AppBar style={{ backgroundColor: '#000000' }} position="static">
            <Toolbar>
              <div style={logoStyles}>
                <img height='50%' src={require("./assets/logo.png")} alt="IMDB Logo"/>
              </div>
              <div style={topRowStyles}>
                <input mx="auto"
                  type='text'
                  id='search'
                  placeholder='search'/>
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
