import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  margin-top:10px;
  margin-bottom:10px;
`
const Input = styled.input`
  width:60%;
  padding:10px;
  border:${props=>props.state ? '1px solid red':'1px solid black'};
`

const AdminTextInput = ({state,handleChange,error,name})=>{

  return(
    <Container>
      <label for='username'>
        <Input id='username' state={error} name={name} type="text" value={state} onChange={(e)=>handleChange(e)} placeholder={name}/>
      </label>
    </Container>
  )
}

export default AdminTextInput
