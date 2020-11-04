import React from 'react';
import emailjs from 'emailjs-com';

import {serviceId, template, apiKey} from '../../APIKeys'

const email =(e)=>{
  e.preventDefault();
  emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE}`, e.target, `${process.env.REACT_APP_APIKEY}`)
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()

}


export default email
