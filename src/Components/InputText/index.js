import React,{useState} from 'react';
import styled from 'styled-components'

const Input = styled.input`
  width:70%;
  color:#0f141e;
  padding-top:20px;
  border:none;
  transition:all .2s;
  font-size:20px;
  border-bottom:${props =>props.error ? '1px solid red':'1px solid #0f141e'};
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
  color:${props =>props.error ? 'red':'#0f141e'};
  opacity:${props=>props.state? '1':'0.5'};

`


const InputText =(

  {name='enter name prop',value='enter value prop',
  onChange={function(){console.log('enter onChange prop')}},error='enter error prop',type='text'}
              )=>{

  const [state,setState] = useState(false)

  const handleClick =(e)=>{
    if(e.target.value){
      setState(true)
    }
    else{
      setState(!state)
    }

  }

  return(
    <div style={{position:'relative'}}>
      <Input type={type} error={error} id={name} autocomplete="off" onFocus={(e)=>handleClick(e)} data-testid="input"
        onBlur={(e)=>handleClick(e)} value={value} onChange={(e)=>onChange(e)} onClick={(e)=>handleClick(e)} name={name}>
      </Input>
      <Label state={state} error={error} data-testid="label" className="label" for={name}>{name}</Label>
    </div>
  )
}

export default InputText
