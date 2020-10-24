import React from 'react';
import {CSSTransition,TransitionGroup} from "react-transition-group";

import NavLinks from '../NavLinks'
import './index.scss';




const Modal =({state})=>{
  return(

      <CSSTransition timeout={300} in={state} classNames="transition" unmountOnExit>
          <div className="container">
            <NavLinks state={state}/>
          </div>
      </CSSTransition>
  )
}


export default Modal
