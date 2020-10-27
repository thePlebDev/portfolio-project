import React from 'react';


const InputTextArea =({name,error,value,onChange})=>{
  return(
    <div>
      <label for={name}></label>
      <textArea name={name} id={name} value={value} onChange={(e)=>onChange(e)}></textArea>
    </div>
  )
}


export default InputTextArea
