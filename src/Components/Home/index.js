import React from 'react';
import styled from 'styled-components'

import Modal from '../Modal';
import Landing from '../Landing';
import Showcase from '../Showcase';




const Home =({state,setState})=>{
  return(
    <div>
        <Showcase/>

        <Modal state={state} />
    </div>
  )
}


export default Home
