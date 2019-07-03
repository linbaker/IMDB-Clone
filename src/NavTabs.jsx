import React from 'react';

function NavTabs() {

  const divStyle={
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none'
  }
  var buttonStyle={
    backgroundColor: '#F5C518',
    borderRadius: '10px',
    border: 'solid black',
    paddingLeft: '50px',
    paddingRight: '50px'
  }
  var topRowStyles = {
    width: '500px'
  }
  return(
    <div>
      <div>
        <input style={topRowStyles}
          type='text'
          id='search'
          placeholder='search'/>
      </div>
      <ul className='navBar' style={divStyle}>
        <li className='navItems'><h4>Watch Now For Free</h4></li>
        <li className='navItems'><h4>Movies, TV & Showtimes</h4></li>
        <li className='navItems'><h4>Celebs, Events & Photos</h4></li>
        <li className='navItems'><h4>News & Community</h4></li>
        <li className='navItems'><h4>Watchlist</h4></li>
        <li className='navItems'><button style={buttonStyle}>Sign in</button></li>
      </ul>
    </div>
  )
}

export default NavTabs;
