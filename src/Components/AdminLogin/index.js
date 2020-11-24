import React from 'react';
import styled from 'styled-components';
import LockIcon from '@material-ui/icons/Lock';
import { Redirect } from 'react-router-dom'


import useAdminForm from '../../Hooks/useAdminForm';
import validation from '../../utils/Validation';
import axiosCall from '../../utils/AxiosUtil'

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
  const {state,handleChange,handleSubmit,errors,redirect} = useAdminForm(validation.adminLogin,axiosCall.post)
  if(redirect){
    return <Redirect to='/blog/admin/post'/>
  }

  return(
    <Container data-testid="container">
      <LockIcon style={{fontSize:'80px'}}/>
      <Form onSubmit={handleSubmit}>
        <AdminTextInput state={state.username} handleChange={handleChange } data-testid="input" name={'username'}  error={errors.username}/>
        <AdminPasswordInput state={state.password} handleChange={handleChange} data-testid="input" error={errors.password}/>
        <SubmitButton type='Submit'> Submit</SubmitButton>
      </Form>
    </Container>
  )
}


export default AdminLogin
