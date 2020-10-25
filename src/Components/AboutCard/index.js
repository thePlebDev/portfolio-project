import React from 'react';
import styled from 'styled-components';

import TechSpecs from '../TechSpecs';

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




const AboutCard =({state,data})=>{
  return(
    <Container state={state}>
      {
        data.map((item,index)=>{
          return <TechSpecs  state={state} key={index} tech1={item.tech1} tech2={item.tech2}/>
      })
    }

    </Container>
  )
}


export default AboutCard
