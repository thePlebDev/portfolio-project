import React from 'react';
import styled from 'styled-components';

import Form from '../Form'
import InputText from '../InputText';
import InputTextArea from '../InputTextArea';
import SubmitButton from '../SubmitButton';
import useContactForm from '../../Hooks/useContactForm';


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

const ContactForm =()=>{
  const {state,errors,handleChange,handleSubmit} = useContactForm()
  return(
    <Form onSubmit={handleSubmit}>
      <Contact>Contact form </Contact>
      <Title>Get in touch - let's work together</Title>
      <InputText name='name' error={errors.header} value={state.header} onChange={handleChange} />
      <InputText name='email' error={errors.header} value={state.header} onChange={handleChange} />
      <InputTextArea name='subject' error={errors.subject}  value={state.subject} onChange={handleChange} />
      <SubmitButton />
    </Form>
  )
}

export default ContactForm
