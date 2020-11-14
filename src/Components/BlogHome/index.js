import React from 'react';
import styled from 'styled-components';

const  Container= styled.div`
  position:relative;
`


const H1 = styled.h1`
  opacity:0.7;
  text-align:center;
  position:relative;
  ::after{
    content:"";
    background-color: red;
    height:2px;
    width:50px;
    bottom:0;
    left:0;
    right:0;
    margin:0 auto;
    position:absolute;
  }
`


const BlogHome =()=>{
  return(
    <Container >
      <H1>Articles</H1>
      <div>
          <h1>Articles</h1>
          <h1>Articles</h1>
          <h1>Articles</h1>
          <h1>Articles</h1>
      </div>
    </Container>
  )
}


export default BlogHome
