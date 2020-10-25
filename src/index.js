import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './Components/App'

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
    padding:0;
    font-family:Helvetica;
    overflowX:hidden;
  }
`



ReactDOM.render(
  <Router>
    <GlobalStyle />
    <App/>
  </Router>,document.getElementById('root'))
