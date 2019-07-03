import React from 'react';
import Trailers from './Trailers';
import NewlyAdded from './NewlyAdded';

function MainPage() {
  const mainPageStyles = {
    backgroundColor: '#F8F8F8',
    height: '100vh',
    margin: '0'
  }

  return(
    <div style={mainPageStyles}>
      <Trailers/>
      <NewlyAdded/>
    </div>
  )
}

export default MainPage;
