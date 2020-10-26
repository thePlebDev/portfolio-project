import React from 'react';
import styled from 'styled-components';

const Words = styled.div`
  padding:3px;
  opacity:${props=>props.state?1:0};
  &:before{
    content:'-';
    color:red;

  };
`

const TechSpecs =({state,tech1,tech2})=>{

  return(
    <div>
      <Words state={state}> {tech1}</Words>
      <Words state={state}> {tech2}</Words>
    </div>
  )
}

export default TechSpecs
