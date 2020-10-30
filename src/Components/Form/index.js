import React from 'react';
import styled from 'styled-components';

import email from '../../utils/EmailJS';

const Form = styled.form`
  width:75%;
  margin:0 auto;
  margin-bottom:10%;
  position:relative;
`


const FormComponent =({children,onSubmit})=>{
  let submitItAll =(e)=>{
    email(e);
    onSubmit(e);
  }
  return(
    <Form onSubmit={(e)=>submitItAll(e)}>
      {children}
    </Form>
  )
}

export default FormComponent
