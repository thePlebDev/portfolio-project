import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import BuildIcon from '@material-ui/icons/Build';

import Block from '../../utils/BlockChain/block.js';
import BlockChain from '../../utils/BlockChain/chain.js';


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
  background-color:red;
  position:relative;
  cursor:pointer;
  transition:all .25s linear;
  box-shadow:1px 1px 8px rgba(0,0,0,0.5);

`

const Crypto =({handleChange})=>{
  const [block,setBlock] = useState('')
  const [chain,setChain] = useState('')
  const handleClick=()=>{
    if(!chain){
      let chain = new BlockChain
      chain.createGenesisBlock()
      setChain(chain)
    }else{
      chain.addBlock(new Block(1,chain.chain.length-1,Date.now(),{amount:4}))
      console.log(chain)
    }

  }

  return(
    <Container>
        <h1>Block Chain</h1>
      <MineContainer>
         <Button role="button" onClick={()=>handleClick()}>Add block</Button>
         <span>
            <BuildIcon style={{fontSize:'60px',marginLeft:'20px'}}/>
         </span>
         {}
      </MineContainer>
    </Container>
  )
}

export default Crypto
