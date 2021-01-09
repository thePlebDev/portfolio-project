import React from 'react';
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
//import {CSSTransition} from "react-transition-group";


const ModalContainer = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  background-color:rgba(0,0,0,0.6);
  display:flex;
  justify-content:center;
  align-items:center;

`
const ModalSubContainer = styled.div`
  background-color:white;
  height:30%;
  width:40%;
  border-radius:4px;
  @media only screen and (max-width:600px){
    height:40%;
  }
`
const ModalTitle = styled.div`
  margin-bottom:5px;
  font-size:25pt;
  line-height:30pt;
  color:#444;
`
const Description = styled.div`
  color:#c0c0c0;
  font-weight:300;
  font-size: 11pt;
  text-transform:uppercase;
  padding-bottom:15px;
  border-bottom:1px solid rgba(0, 0, 0, 0.1);
`
const Tech = styled.div `
  margin-top:10px;
  color:#e31b6d;
`
const CodeButton = styled.button`
  background-color:#e31b6d;
  color:white;
  font-size:15px;
  padding:5px 15px;
  border:none;
  border-radius:4px;
  position:absolute;
  bottom:-110px;
  left:10px;
  margin:0 auto;
  cursor:pointer;
`
const Close = styled.div`
  position:absolute;
  top:0px;
  right:10px;
  display:block;
  width:30px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
`

const Modal =({state})=>{
  return(

    <ModalContainer>
      <ModalSubContainer>
        <div style={{position:'relative'}}>
            <ModalTitle>Pup Spotter</ModalTitle>
            <Description>Dog spotting platform</Description>
            <Tech>React / Node / Express / Mongo </Tech>
            <CodeButton>View Code</CodeButton>
            <Close> <CloseIcon style={{color:'#e31b6d',fontSize:'40px'}}/></Close>
        </div>
      </ModalSubContainer>
    </ModalContainer>
  )
}


export default Modal
