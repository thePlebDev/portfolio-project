import React from 'react'
import styled from 'styled-components'


const CryptoContainer = styled.div`
  border:1px solid red;
  display:flex;
  align-items:center;
  justify-content:flex-start;
`
const Title = styled.h1`
  margin-left:20px;
  margin-bottom:0;
  margin-top:0;
`
const Symbol = styled.span`
align-self:flex-end;
margin-bottom:7px;
margin-left:7px;
opacity:0.7;
`

const Price = styled.span
`
  font-size:25px;
`

const CryptoInfo =({logo,name,symbol,price})=>{


  return(
    <div>
      <CryptoContainer>
      <img src={logo} style={{marginLeft:'20px'}} alt='Crypto logo' width="32" height="32"/>
      <Title>{name}</Title>
      <Symbol>({symbol})</Symbol>
      </CryptoContainer>
      <div style={{marginTop:'10px'}}>
      <Price>${price}</Price>
      <Symbol>USD</Symbol>
      </div>

    </div>
  )
}

export default CryptoInfo
