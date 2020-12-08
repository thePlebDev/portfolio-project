import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   display:grid;
   align-items:center;
   grid-template-columns:repeat(auto-fit,minmax(340px,1fr));
`


const CryptoContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  margin-top:20px;

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
    <Container>
      <CryptoContainer>
          <img src={logo} style={{marginLeft:'20px'}} alt='Crypto logo' width="32" height="32"/>
          <Title>{name}</Title>
          <Symbol>({symbol})</Symbol>
      </CryptoContainer>

      <div style={{textAlign:'center',marginTop:'20px'}}>
        <Price>${price}</Price>
        <Symbol>USD</Symbol>
      </div>

      <div>

      </div>
    </Container>
  )
}

export default CryptoInfo
