import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:75%;
background-color:#0f141e;
color:white;
position:absolute;
bottom:5px;
left:12.3%;
height:${props=>props.state?'50px':'0px'};
transition:all .3s;
opacity:0.9;
`

const Words = styled.div`
  padding:3px;
  opacity:${props=>props.state?1:0};
  &:before{
    content:'-';
    color:red;

  };
`



const AboutCard =({state})=>{
  return(
    <Container state={state}>
        <div>
          <Words state={state}> Mongo</Words>
          <Words state={state}> Express</Words>
        </div>
        <div>
          <Words state={state}> React</Words>
          <Words state={state}> Node</Words>
        </div>
        <div>
          <Words state={state}> AWS</Words><div>
            <Words state={state}> Ubuntu </Words>
          </div>
        </div>

    </Container>
  )
}


export default AboutCard
