import React from 'react';
import styled from 'styled-components';

import Landing from '../Landing'
import useLoading from '../../Hooks/useLoadingAnimation';

const Name = styled.h5`
  font-weight: 400;
  letter-spacing: .4em;
  color: #878a8f;
  font-size: .875rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  margin-left:12%;
  transition:all 2s;
  opacity:${props=>props.state?'1':'0'};
`
const Title = styled.h1`
  margin-top:0;
  font-weight: 800;
  letter-spacing: -.01em;
  color: #0f141e;
  margin-left:12%;
  transition:all 2s;
  opacity:${props=>props.state?'1':'0'};
`
const About = styled.h3`
  font-weight: 500;
  color: #878a8f;
  letter-spacing: normal;
  margin-left:12%;
  transition:all 2s;
  opacity:${props=>props.state?'1':'0'};
`
const H4 = styled.h4`
  font-weight: 800;
  font-size: 1.125rem;
  color: #0f141e;
  transition:all 2s;
  opacity:${props=>props.state?'1':'0'};
`
const Or = styled.span`
  font-style: normal;
  font-size: 16px;
  line-height: 1.5625rem;
  font-weight: 500;
  letter-spacing: normal;
  color:#878a8f;
  margin-top:3px;
  margin-left:10px;
  margin-right:10px;
  transition:all 2s;
  opacity:${props=>props.state?'1':'0'};
`



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
