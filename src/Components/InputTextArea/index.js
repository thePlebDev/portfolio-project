import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  width:70%;
  height:70px;
  margin-top:2rem;
  border:${props=>props.error ?'1px solid red':''};
  padding:5px;
  font-size:20px;
  @media only screen and (min-width: 1200px){
    width:53%;
  };
`


const InputTextArea =({name="enter name prop",error='enter error prop',value='enter value prop',onChange})=>{
  return(
    <div>
      <label for={name} data-testid="label"></label>
      <TextArea name={name} data-testid="textarea" id={name} error={error} value={value} onChange={(e)=>onChange(e)}placeholder="MESSAGE"></TextArea>
    </div>
  )
}


export default InputTextArea
