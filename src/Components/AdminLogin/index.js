import React,{useState} from 'react';
import styled from 'styled-components';
import Form from '../Form';

import useAdminForm from '../../Hooks/useAdminForm';
import validation from '../../utils/Validation';



const Container = styled.div`
  width:80%;
  border: 1px solid red;
  margin:0 auto;
`


const AdminLogin =()=>{
  const {state,handleChange,handleSubmit} = useAdminForm(validation.adminLogin)
  return(
    <Container>
      <Form onSubmit={handleSubmit}>
        <label>
          username
          <input name="username" value={state.username} onChange={(e)=>handleChange(e)}/>
        </label>

        <label>
        password
          <input name="password" value={state.password} onChange={(e)=>handleChange(e)}/>
        </label>
        <button type='Submit'> Submit</button>
      </Form>
    </Container>
  )
}


export default AdminLogin
