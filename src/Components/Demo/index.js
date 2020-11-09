import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';


const Container = styled.div`
   position:absolute;
   z-index:9999999999999999999999999999;
   right:12.5%;
   display:${props =>props.state?'block':'none'};
   width:75%;
   height:100%;


`

const Demo = ({showVid})=>{
  return(
    <Container state={showVid}>
            <ReactPlayer width="100%" height="90%" controls url="https://www.youtube.com/watch?v=7sDY4m8KNLc&t=58s" />
    </Container>
  )
}


export default Demo
