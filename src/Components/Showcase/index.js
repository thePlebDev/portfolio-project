import React from 'react';
import Card from '../Card'
import styled from 'styled-components'

import LandingPage from '../LandingPage'

const Container = styled.div`

width:100%;
height:100vh;
margin:10px auto;
position:relative;
`
const Text = styled.h5`
margin:10px auto;
  color:#878a8f;
  font-size:.875rem;
  letter-spacing:0.4em;
  text-transform:uppercase;
  font-weight:400;
  width:300px;
  text-align:center;
  padding:5px;
  border-bottom: 1px solid #0f141e;

`




const Showcase =()=>{

  return(
    <div>
      <LandingPage/>
      <Text> showcase Projects</Text>
    <Container >
     <Card />
    </Container>
    </div>
  )
}

export default Showcase
