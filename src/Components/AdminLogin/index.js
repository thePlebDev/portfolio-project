import React,{useState} from 'react';
import styled from 'styled-components';
import LockIcon from '@material-ui/icons/Lock';


import useAdminForm from '../../Hooks/useAdminForm';
import validation from '../../utils/Validation';

import Form from '../Form';
import AdminPasswordInput from '../AdminPasswordInput'
import AdminTextInput from '../AdminTextInput'
import SubmitButton from '../SubmitButton'



const Container = styled.div`
  width:80%;
  margin:0 auto;
  text-align:center;
`


const AdminLogin =()=>{
  const {state,handleChange,handleSubmit,errors} = useAdminForm(validation.adminLogin)
  return(
    <Container>
      <LockIcon style={{fontSize:'80px'}}/>
      <Form onSubmit={handleSubmit}>
        <AdminTextInput state={state.username} handleChange={handleChange}  error={errors.username}/>
        <AdminPasswordInput state={state.password} handleChange={handleChange} error={errors.password}/>
        <SubmitButton type='Submit'> Submit</SubmitButton>
      </Form>
    </Container>
  )
}


export default AdminLogin
