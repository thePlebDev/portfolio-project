import React,{useEffect,useState} from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {Link, animateScroll as scroll} from "react-scroll";
import styled from 'styled-components';

import './index.scss'

const Links = styled.div`
  width: 70%;
  margin:20% auto;
  position:relative;

`

const Text = styled.div`
  padding:5px;
  width:200px;
  color:white;
  font-size: 50px;
  transition:all 0.25s ease-in;
  cursor:pointer;
  opacity:0.7;
`

const Bar = styled.div`
background-color:red;
height:10px;
width:${props=>props.state ? '200px':'0px'};
align-self:center;
border-radius:4px;
margin-left:7px;
transition:all .2s;
`



const NavLinks =({state})=>{
  const [show,setShow] = useState(false)
  const [showBar2,setShowBar2] =useState(false)
  const [showBar3,setShowBar3] =useState(false)

  const scrollToTop = ()=>{
    scroll.scrollToTop();
  }

  return(
      <Links state={state}>

          <Link to="home" smooth={true} duration={500} offset={-70}>
              <Text state={state} onMouseOver={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}}>Home</Text>
              <Bar state={show}></Bar>
          </Link>

          <Link to="projects" smooth={true} duration={500} offset={-70}>
            <Text onMouseOver={()=>{setShowBar2(true)}} onMouseLeave={()=>{setShowBar2(false)}}>Projects</Text>
            <Bar state={showBar2}></Bar>
          </Link>

          <Link to="contact" smooth={true} duration={500} offset={-70}>
            <Text className="text" onMouseOver={()=>{setShowBar3(true)}} onMouseLeave={()=>{setShowBar3(false)}}>Contact</Text>
            <Bar state={showBar3}></Bar>
          </Link>
      </Links>
  )
}


export default NavLinks
