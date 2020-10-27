import React from 'react';
import styled from 'styled-components'


const Form =({children,onSubmit})=>{
  return(
    <form onSubmit={(e)=>onSubmit(e)}>
      {children}
    </form>
  )
}

export default Form
