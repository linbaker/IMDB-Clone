import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import SideBar from './SideBar';
import MainPage from './MainPage';

function App() {
  const containerStyles = {
    backgroundColor: '#F0F0F0',
    width: '1000px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '0px',
    display: 'grid',
    gridTemplateColumns: '700px 300px'
  }
  const mainStyles = {
    gridColumn: '1/2'
  }
  const sideBarStyles ={
    gridColumn: '2/3'
  }
  return (
    <div className="App">
          <NavBar/>
          <div style={containerStyles}>
          <div style={mainStyles}>
            <MainPage/>
          </div>
          <div style={sideBarStyles}>
            <SideBar/>
          </div>
      </div>
    </div>
  );
}

export default App;
