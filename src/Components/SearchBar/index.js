import React,{useState,useEffect} from 'react'

import styled from 'styled-components'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import useSearchInput from '../../Hooks/useSearchInput'

const Container = styled.div`

  position:absolute;
  width:100%;
`




const SearchBar = ()=>{
  const [show,setShow] = useState(true)

  const {state,handleChange} = useSearchInput()


  return(
    <Container>
      {
        show
          ?
            <div>
                <label style={{position:'relative',display:'flex'}} >
                  <input type="text" placeHolder='Search blog posts' onChange={(e)=>{handleChange(e)}} value={state.search} name="search" style={{width:'90%',padding:'10px',margin:'0 auto',fontSize:'1.5rem'}}/>
                  <HighlightOffIcon style={{position:'absolute',top:'25%',right:'5%','z-index':999,cursor:'pointer'}} onClick={()=>setShow(false)}/>
                </label>

              <div style={{textAlign:'center',border:'1px solid red',marginTop:'5px'}}>
                  <div style={{border:'1px solid green'}}>
                    Articles
                  </div>
              </div>
            </div>
          :
        <div></div>
    }
    </Container>
  )

}

export default SearchBar
