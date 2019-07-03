import React from 'react';

function Trailers() {
  const trailerStyles = {
    backgroundColor: '#333333',
    height: '30vh',
    margin: '0'
  }

  return(
    <div style={trailerStyles}>
      <img width='650px' src={require('./assets/maintop.png')}/>
    </div>
  )
}

export default Trailers;
