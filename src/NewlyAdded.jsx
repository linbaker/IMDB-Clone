import React from 'react';

function NewlyAdded() {
  const newlyAddedStyles = {
    height: '100px',
    margin: '0'
  }

  return(
    <div style={newlyAddedStyles}>
      <br/>
      <img width='650px' src={require('./assets/newlyadded.png')}/>
      <br/>
      <hr/>
    </div>
  )
}

export default NewlyAdded;
