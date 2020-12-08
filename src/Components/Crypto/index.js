import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import CryptoInfo from '../CryptoInfo'


const Container = styled.div`
    text-align:center;
    margin-top:20px;
    text-transform:uppercase;
`


const Crypto =({handleChange})=>{
  const [coin,setCoin] = useState('')
  console.log(coin)

  useEffect(()=>{
    fetch("https://api.nomics.com/v1/currencies/ticker?key=12692fcb1384a243f277dc7dbf96b066&ids=BTC&interval=1d,30d&convert=EUR&per-page=100&page=1")
  .then(response => response.json())
  .then(data => setCoin(data))
  .catch(error=>console.log(error))
  },[])

  return(
    <Container>

         {
           coin
            ?
            coin.map((item,index)=>{
              return(
                <CryptoInfo key={index} name={item.name} logo={item.logo_url} symbol={item.symbol} price={item.price}/>
              )
            })
            :
            <div></div>
         }

    </Container>
  )
}

export default Crypto
