import React,{useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'
import BuildIcon from '@material-ui/icons/Build';


const Container = styled.div`
    text-align:center;
    margin-top:20px;
    text-transform:uppercase;
`
const MineContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:10px;

`
const Button = styled.div`
  height:90px;
  width:90px;
  border-radius:50%;
  background-color:red;
  position:relative;
  cursor:pointer;
  transition:all .25s linear;
  box-shadow:1px 1px 8px rgba(0,0,0,0.5);

  &:hover{
    transform:translateY(-5px);
    box-shadow:1px 1px 20px rgba(0,0,0,0.5);
  }

  &:before{
    content:'add';
    font-size:30px;
    position:absolute;
    bottom:0; left:0; right:0; top:30%;
    margin:0 auto;
  }
`



const Crypto =({handleChange})=>{
  return(
    <Container>
        <h1>Block Chain</h1>
      <MineContainer>
         <Button role="button" onClick={()=>handleChange()}></Button>
         <span>
            <BuildIcon style={{fontSize:'60px',marginLeft:'20px'}}/>
         </span>
      </MineContainer>
    </Container>
  )
}

export default Crypto
