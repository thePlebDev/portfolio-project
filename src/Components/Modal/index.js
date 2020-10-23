import React from 'react';
import {CSSTransition} from "react-transition-group";
import './index.scss';




const Modal =({state})=>{
  return(
      <CSSTransition timeout={300} in={state} classNames="transition" unmountOnExit>
          <div className="modal-container">
          </div>
      </CSSTransition>
  )
}


export default Modal
