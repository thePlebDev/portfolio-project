import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
position:absolute;
height:100%;
width:100%;
bottom:0;
rigth:0;
opacity:0.8;
background-color:#0f141e;
animation:unfoldIn 1s;
@keyframes unfoldIn {
  0%{
    height:0
  }
  100%{
    height:100%;
  }

}
`


const Modal =({state})=>{
  return(
    <ModalContainer state={state} >
      <div>This is the modal</div>
    </ModalContainer>
  )
}


export default Modal
