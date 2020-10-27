import React from 'react';

import Form from '../Form'
import InputText from '../InputText';
import InputTextArea from '../InputTextArea';
import SubmitButton from '../SubmitButton';
import useContactForm from '../../Hooks/useContactForm';

const ContactForm =()=>{
  // we are going to have a custom hook call
  // have Form component that uses the child props
  // a text input component for the title
  // a text area input component for the subject matter
  const {state,errors,handleChange,handleSubmit} = useContactForm()

  return(
    <Form onSubmit={handleSubmit}>
      <InputText type='text' name='header' error={errors.header} value={state.header} onChange={handleChange} />
      <InputTextArea name='subject' error={errors.subject}  value={state.subject} onChange={handleChange} />
      <SubmitButton />
    </Form>
  )
}

export default ContactForm
