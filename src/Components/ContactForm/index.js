import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import email from '../../utils/EmailJS';


import Form from '../Form'
import InputText from '../InputText';
import InputTextArea from '../InputTextArea';
import SubmitButton from '../SubmitButton';
import EmailResponse from '../EmailResponse';
import useContactForm from '../../Hooks/useContactForm';

import validation from '../../utils/Validation'


const Contact = styled.h5`
  font-size: .875rem;
  text-transform:uppercase;
  padding-top:5px;
  padding-bottom:5px;
  font-weight: 400;
  letter-spacing: .4em;
  color: #878a8f;
`
const Title = styled.div`
  font-size: 2.125rem;
  line-height: 2.5rem;
  padding-top: 2px;
  padding-bottom: 3px;
  font-weight: 800;
  letter-spacing: -.01em;
  color: #0f141e;
`
const Icon = styled.div`
  align-self:center;
  margin-left:10px;
  color: #878a8f;
  cursor:pointer;
  transition:all .3s;
  &:hover{
    color:#0f141e;
  }
`


const ContactForm =()=>{
  const {state,errors,handleChange,handleSubmit,status,setStatus} = useContactForm(validation.contactForm)
  return(
    <Form onSubmit={handleSubmit} email={email}>


    </Form>
  )
}

export default ContactForm
