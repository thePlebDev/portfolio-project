import React from 'react';
import styled from 'styled-components'

import Hamburger from '../Hamburger'
import {Text} from '../../Stylings/NavBar';

const Image = styled.img`
width:100px;
height:50px;
`


const NavBar =({state,setState})=>{

  return(
    <div style={{display:'flex',justifyContent:'space-between',position:'relative'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'12%'}}>
            <Text> Elliott Software Development</Text>
        </div>
        <Hamburger state={state} setState={setState}/>
    </div>
  )
}

export default NavBar
