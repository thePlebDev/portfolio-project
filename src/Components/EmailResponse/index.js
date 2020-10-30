import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';

const Response = styled.div`
    position:relative;
    font-weight: 800;
    letter-spacing: -.01em;
`
const ResponeContainer = styled.div`
    position:absolute;
    left:40%;
    top:32%;
    border-radius:4px;
    background-color:#0f141e;
    color:white;
    width:150px;
    text-align:center;
    font-size:20px;
    padding:3px;
    z-index:1;
    transition:all .3s;

    top:${props=>props.state ? '32%': '35%'};
    opacity:${props=>props.state ? '0.9':0};
`


const EmailResponse =({status,setStatus})=>{


  return(
    <ResponeContainer state={status}>
      <Response>
        Thank you!
        <CloseIcon style={{position:'absolute',fontSize:'0.9em',top:'-5px',cursor:'pointer'}} onClick={()=>{setStatus(false)}}/>
      </Response>
    </ResponeContainer>
  )
}

export default EmailResponse
