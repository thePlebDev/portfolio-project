import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

import {BurgerLine1,BurgerLine2,BurgerLine3,Text,Container,BurgerContainer} from '../../Stylings/NavBar'

//since it is just the click function.
//I am going to leave it in the component

const Hamburger =({state,setState})=>{

  const handleClick =()=>{
    setState(!state);
    console.log(state)
  }

  return(
    <Container>
      <Text state={state}>Menu</Text>
      <BurgerContainer onClick={()=>handleClick()} >
          <BurgerLine1 state={state}/>
          <BurgerLine2 state={state}/>
          <BurgerLine3 state={state}/>
      </BurgerContainer>
    </Container>
  )
}

export default Hamburger
