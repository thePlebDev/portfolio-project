import React from 'react';
import styled from 'styled-components';

const Body = styled.textarea`
  width:80%;
  height:50vh;

`

const TextArea =({state,handleChange,name})=>{

  return(
    <div>
      <label>
        <Body name={name} data-testid="textarea" onChange={(e)=>handleChange(e)} value={state}/>
      </label>
    </div>
  )
}

export default TextArea
