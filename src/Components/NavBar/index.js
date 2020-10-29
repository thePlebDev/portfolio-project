import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import Hamburger from '../Hamburger'
import {MovingText} from '../../Stylings/NavBar';
import './index.scss'

import useLoading from '../../Hooks/useLoadingAnimation'

const Image = styled.img`
width:100px;
height:50px;
`


const NavBar =({state,setState})=>{
  const {show} = useLoading()

  return(
    <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'red',opacity:'0.9',width:'100%',position:'fixed',zIndex:9}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'12%',position:'relative'}}>
            <MovingText state={show}> Elliott Development</MovingText>
        </div>
        <Hamburger state={state} setState={setState}/>
    </div>
  )
}

export default NavBar
