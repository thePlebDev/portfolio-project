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

      <EmailResponse status={status} setStatus={setStatus}/>
      <div id="contact" style={{display:'flex'}}>
          <Contact>Contact </Contact>
          <a href="https://github.com/thePlebDev" target="_blank" rel="noopener noreferrer" style={{alignSelf:'center'}}>
            <Icon>
              <GitHubIcon/>
            </Icon>
          </a>
          <a href="https://twitter.com/Tristanthewebd1" target="_blank" rel="noopener noreferrer" style={{alignSelf:'center'}}>
          <Icon>
            <TwitterIcon style={{alignSelf:'center',marginLeft:'10px'}}/>
          </Icon>
          </a>
      </div>
      <Title>Get in touch - let's work together</Title>
      <InputText type={'text'} name='name' error={errors.name} value={state.name} onChange={handleChange} />
      <InputText type={'email'} name='email' error={errors.email} value={state.email} onChange={handleChange} />
      <InputTextArea name='subject' error={errors.subject}  value={state.subject} onChange={handleChange} />
      <SubmitButton />

    </Form>
  )
}

export default ContactForm
