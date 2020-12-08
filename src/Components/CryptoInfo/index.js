import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   display:grid;
   grid-template-columns:repeat(auto-fit,minmax(340px,2fr));
   border:1px solid blue;
`


const CryptoContainer = styled.div`
border:1px solid red;
  display:flex;
  align-items:center;
  justify-content:center;

`
const Title = styled.h1`
  margin-left:20px;
  margin-bottom:0;
  margin-top:0;
`
const Symbol = styled.span`
align-self:center;
margin-top:7px;
margin-bottom:7px;
margin-left:7px;
opacity:0.7;
`

const Price = styled.span`
  font-size:25px;
`
const PriceContainer = styled.div`
  display:flex;
  align-items:center;
  align-self:center;
  border:1px solid blue;
  justify-content:center;
`

const ListContainer = styled.ul`
border:1px solid blue;
display:flex;
align-items:center;
justify-content:center;
list-style:none;
padding-left:0;
`

const ListItem = styled.li`

  margin-bottom:24px;
  font-size:15px;
`
const H5 = styled.h5`
  background:rgb(245, 247, 248);
  padding:12px;
  color:black;

`


const CryptoInfo =({logo,name,symbol,price})=>{


  return(
    <Container>
      <CryptoContainer>
          <img src={logo} style={{marginLeft:'20px'}} alt='Crypto logo' width="32" height="32"/>
          <Title>{name}</Title>
          <Symbol>({symbol})</Symbol>
      </CryptoContainer>

      <PriceContainer>
        <Price>${price}</Price>
        <Symbol>USD</Symbol>
      </PriceContainer>

        <ListContainer>
          <ListItem>
            <H5>Market cap</H5>
            <div style={{padding:'0 12px'}}>
              <span>3500000000 USD</span>
              <br/>
              <span> 18,343,343 BTC</span>
            </div>
          </ListItem>
          <ListItem>
            <H5>volume</H5>
            <div style={{padding:'0 12px'}}>
              <span>3500000000 USD</span>
              <br/>
              <span> 18,343,343 BTC</span>
            </div>
          </ListItem>
          <ListItem>
            <H5>volume</H5>
            <div style={{padding:'0 12px'}}>
              <span>3500000000 USD</span>
              <br/>
              <span> 18,343,343 BTC</span>
            </div>
          </ListItem>

        </ListContainer>


      <div>

      </div>
    </Container>
  )
}

export default CryptoInfo
