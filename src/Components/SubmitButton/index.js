import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  padding:4px 36px;
  border-radius:4px;
  border:1px solid #0f141e;
  background-color:white;
  margin-top:10px;
  cursor:pointer;
`

const SubmitButton =()=>{

  return(
    <Button type='submit'>SEND</Button>
  )
}

export default SubmitButton
