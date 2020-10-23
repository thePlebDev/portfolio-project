import React from 'react'
import Modal from '../Modal'


const ShowModal =({state})=>{

  return(
    <div>
      {
        state
          ?
        <Modal state={state} />
          :
        <div/>
      }
    </div>
  )
}

export default ShowModal
