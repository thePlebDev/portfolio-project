import React,{useState} from 'react';
import styled from 'styled-components'

const Input = styled.input`
  width:70%;
  color:#0f141e;
  padding-top:20px;
  border:none;
  transition:all 3s;
  font-size:20px;
  border-bottom: 1px solid #0f141e;
  outline:none;



  @media only screen and (min-width: 1200px){
    width:53%;
  }
`

const Label = styled.label`
  transition:all .3s;
  left:0;
  bottom:${props=>props.state? '50%':'0'};
  position:absolute;
  font-size:${props=>props.state? '12px':'16px'};
  text-transform:uppercase;
  color:#0f141e;
  opacity:${props=>props.state? '1':'0.5'};;
`


const InputText =({name,value,onChange,error})=>{
  const [state,setState] = useState(false)

  const handleClick =(e)=>{
    if(e.target.value){
      setState(true)
    }else{
      setState(!state)
    }

  }

  return(
    <div style={{position:'relative'}}>
      <Input type="text" id={name} autocomplete="off" onFocus={(e)=>handleClick(e)} onBlur={(e)=>handleClick(e)} value={value} onChange={(e)=>onChange(e)} name={name}></Input>
      <Label state={state} className="label" for={name}>{name}</Label>
    </div>
  )
}

export default InputText
