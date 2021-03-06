import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:20px;
`
const Text = styled.span`
padding:10px;
font-size:25px;
text-transform:uppercase;
color:${({theme})=>theme.text};
cursor:pointer;
position:relative;

&:after{
  content:'';
  background-color:red;
  height:2px;
  width:0px;
  position:absolute;
  bottom:0;
  left:0;
  right:0;
  margin:0 auto;
  transition:all .3s;

};

&:hover:after{
  width:90px;
}
`




const MiniNav =()=>{

  return(
    <Container>
      <Link to="/">
        <Text data-testid="home">Home</Text>
      </Link>
      <Link  to="/projects">
        <Text data-testid="blog">Projects</Text>
      </Link>
    </Container>
  )
}

export default MiniNav
