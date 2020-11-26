import React from 'react';
import styled from 'styled-components';


const Form = styled.form`
  width:75%;
  margin:0 auto;
  margin-bottom:10%;
  position:relative;
`


const FormComponent =({children,onSubmit})=>{
  return(
    <Form onSubmit={(e)=>onSubmit(e)} data-testid="container">
      {children}
    </Form>
  )
}

export default FormComponent
