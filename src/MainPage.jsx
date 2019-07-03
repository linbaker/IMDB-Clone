import React from 'react';
import Trailers from './Trailers'

function MainPage() {
  const mainPageStyles = {
    backgroundColor: 'white',
    height: '100vh',
    margin: '0'
  }

  return(
    <div style={mainPageStyles}>
      <Trailers/>
      <h1>THIIIIIINNNNGS</h1>

    </div>
  )
}

export default MainPage;
