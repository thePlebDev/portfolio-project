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
    <Form onSubmit={(e)=>onSubmit(e)}>
      {children}
    </Form>
  )
}

export default FormComponent
