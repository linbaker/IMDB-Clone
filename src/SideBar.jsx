import React from 'react';

function SideBar() {
  const sideBarStyles = {
    height: '100vh',
    backgroundColor: '#F8F8F8',
    border: '3px solid grey'
  }

  return(
    <div style={sideBarStyles}>
      <img width='100%' src={require("./assets/sidead.png")} alt="ad for soylent"/>
      <br/>
      <hr/>
      <h4>Opening This Week</h4>
    </div>
  )
}

export default SideBar;
