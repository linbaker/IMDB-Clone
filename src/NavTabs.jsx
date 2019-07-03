import React from 'react';

function NavTabs() {

  const divStyle={
    display: 'flex',
    flexDirection: 'row'

  }
  return(
    <div style={divStyle}>
      <h4>Watch Now For Free</h4>
      <h4>Movies, TV & Showtimes</h4>
      <h4>Celebs, Events & Photos</h4>
      <h4>News & Community</h4>
      <h4>Watchlist</h4>
      <button>Sign in</button>
    </div>
  )
}

export default NavTabs;
