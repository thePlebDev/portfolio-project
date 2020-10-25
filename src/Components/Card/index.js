import React from 'react';
import styled from 'styled-components'

const Image = styled.img`
  width:75%;
  height:100%;
  box-shadow:0 5px 25px rgba(0,0,0,0.25);
  transition:all .3s;

  &:hover{
    box-shadow:0 5px 60px rgba(0,0,0,0.25);
  }
`
const Container = styled.div`
  text-align:center;

  position:relative;

`
const Title = styled.h2`
color:#878a8f;
font-size:.875rem;
letter-spacing:0.4em;
text-transform:uppercase;
font-weight:400;
border-bottom: 1px solid #878a8f;
text-align:center;
cursor:pointer;

`

const Card =({img,data})=>{
  return(
    <Container>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <Title>About</Title>
        <Title>code</Title>
        <Title>live site</Title>

      </div>
      <Image src={require("../../Assets/pupFinderPortFolio.png")} alt="project" />
    </Container>
  )
}

export default Card
