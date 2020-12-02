import React from 'react';

import styled from 'styled-components';
import PropTypes from 'prop-types'

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
    <Container data-testid="container">
      <label id="password" >
        <Input htmlFor="password" data-testid="password-input" state={error} name="password" type="password" value={state} onChange={(e)=>handleChange(e)} placeholder='password'/>
      </label>
    </Container>
  )
}

AdminPasswordInput.propTypes ={
  state:PropTypes.string,
  handleChange:PropTypes.func,
  error:PropTypes.string

}

export default AdminPasswordInput
