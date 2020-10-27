import React from 'react';


const InputText =({name,value,onChange,error})=>{


  return(
    <div>
      <label for={name}></label>
      <input type="text" id={name} value={value} onChange={(e)=>onChange(e)} name={name}></input>
    </div>
  )
}

export default InputText
