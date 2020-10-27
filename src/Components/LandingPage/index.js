import React from 'react';
import styled from 'styled-components';
import Landing from '../Landing';
import useLoading from '../../Hooks/useLoadingAnimation';

import {Or,H4,Title,About,Name} from '../../Stylings/LandingPage';



const LandingPage =()=>{
  const {show} = useLoading()


  return(
    <div style={{height:'100vh'}}>
      <Landing />
      <Name state={show}>Tristan Elliott</Name>
      <Title state={show}>Full stack web developer</Title>
      <About state={show}>Living in New Brunswick, Canada. I strive to write the cleanest code possible </About>
      <div style={{display:'flex',marginLeft:'12%'}}>
        <H4 state={show} >View Projects</H4>
        <Or state={show} style={{alignSelf:'center'}}>or</Or>
        <H4  state={show}>Contact</H4>
      </div>
    </div>
  )
}


export default LandingPage
