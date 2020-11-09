import React from 'react';
import emailjs from 'emailjs-com';

import {serviceId, template, apiKey} from '../../APIKeys'

const email =(e)=>{
  console.log(serviceId)
  let a = process.env.REACT_APP_SERVICE_ID
  //console.log(process.env.REACT_APP_SERVICE_ID)
  e.preventDefault();
  emailjs.sendForm(`${serviceId}`, `${template}`, e.target, `${apiKey}`)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()

}


export default email
