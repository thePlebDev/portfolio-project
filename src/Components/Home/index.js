import React from 'react';


import Modal from '../Modal';
import ContactForm from '../ContactForm';
import Showcase from '../Showcase';




const Home =({state,setState})=>{
  return(
    <div>
        <Showcase/>
        <ContactForm/>
        <Modal state={state} />
    </div>
  )
}


export default Home
