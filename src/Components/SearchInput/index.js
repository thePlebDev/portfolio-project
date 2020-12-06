import React from'react'
import styled from 'styled-components'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import PropTypes from 'prop-types'


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
      <Input data-testid="input" type="text" placeholder='Search blog posts...' onChange={(e)=>{handleChange(e)}} value={state} name="search" />
      <HighlightOffIcon data-testid="close" style={{position:'absolute',top:'25%',right:'5%','z-index':999,cursor:'pointer',color:'black'}} onClick={()=>setShow(false)}/>
    </Label>
  )
}

SearchInput.propTypes = {
  state: PropTypes.string,
  handleChange:PropTypes.func,
  setShow:PropTypes.func,
}

SearchInput.defaultProps ={
  state:'Enter a state prop',
  handleChange:()=>{console.log('Enter handleChange prop')},
  setShow:()=>{console.log('Enter setShow prop')}
}



export default SearchInput
