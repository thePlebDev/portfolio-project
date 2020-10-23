import React from 'react';

import Hamburger from '../Hamburger'


const NavBar =({state,setState})=>{

  return(
    <div style={{border:'1px solid red',display:'flex',justifyContent:'space-between',position:'relative'}}>
        <div>
            <div>Elliott software development</div>
        </div>
        <Hamburger state={state} setState={setState}/>
    </div>
  )
}

export default NavBar
