import React from 'react';

import Hamburger from '../Hamburger'


const NavBar =()=>{

  return(
    <div style={{border:'1px solid red',display:'flex',justifyContent:'space-between'}}>
        <div>
            <div>Elliott software development</div>
        </div>
        <Hamburger/>
    </div>
  )
}

export default NavBar
