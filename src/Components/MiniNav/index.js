import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font
`
const Text = styled.span`
padding:10px;
font-size:20px;
text-transform:uppercase;
opacity:0.6;
cursor:pointer
`




const MiniNav =()=>{


  return(
    <Container>
      <Text>Home</Text>
      <Text>Articles</Text>
      <Text>About</Text>
    </Container>
  )
}

export default MiniNav
