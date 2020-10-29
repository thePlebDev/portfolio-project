import React from 'react';
import {CSSTransition} from "react-transition-group";

import NavLinks from '../NavLinks'
import './index.scss';




const Modal =({state})=>{
  return(

      <CSSTransition timeout={300} in={state} classNames="transition" unmountOnExit>
          <div className="container" style={{position:'fixed'}}>
            <NavLinks state={state}/>
          </div>
      </CSSTransition>
  )
}


export default Modal
