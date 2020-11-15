import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  margin-top:20px;
  margin-bottom:10px;
`
const Input = styled.input`
  width:60%;
  padding:10px;
  border:${props=>props.state ? '1px solid red':'1px solid black'};
`


const AdminPasswordInput = ({state,handleChange,error})=>{


  return(
    <Container>
      <label id="password">
        <Input for="password" state={error} name="password" type="password" value={state} onChange={(e)=>handleChange(e)} placeholder='password'/>
      </label>
    </Container>
  )
}

export default AdminPasswordInput
