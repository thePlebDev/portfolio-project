import React from 'react'

import styled from 'styled-components'

const Spiner = styled.div`

display: block;
width: 120px;
height: 120px;
margin:15% auto;


&:after {
content: " ";
display: block;
width: 104px;
height: 104px;
margin: 8px;
border-radius: 50%;
border: 6px solid #fff;
border-color: white;
border-bottom-color:red;
animation: spin 1.2s linear infinite;
}
@keyframes spin {
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
}
`


const Loader =()=>{

  return(
    <Spiner/>

  )
}

export default Loader
