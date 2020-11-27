import React from'react'
import styled from 'styled-components'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Label = styled.label`
  display:flex;
  position:relative;
`

const Input = styled.input`
  width:100%;
  padding:10px;
  margin:0 auto;
  font-size:1.5rem;
`



const SearchInput=({state,handleChange,setShow})=>{
  return(
    <Label >
      <Input type="text" placeholder='Search blog posts...' onChange={(e)=>{handleChange(e)}} value={state} name="search" />
      <HighlightOffIcon style={{position:'absolute',top:'25%',right:'5%','z-index':999,cursor:'pointer'}} onClick={()=>setShow(false)}/>
    </Label>
  )
}

export default SearchInput
