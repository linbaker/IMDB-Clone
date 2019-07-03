import React from 'react';

function SideBar() {
  const sideBarStyles = {
    height: '100vh',
    backgroundColor: 'white',
    border: '3px solid grey'
  }

  return(
    <div style={sideBarStyles}>
      <img width='100%' src={require("./assets/sidead.png")} alt="ad for soylent"/>
    </div>
  )
}

export default SideBar;
