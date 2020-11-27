import React,{useState,useEffect} from 'react'

import styled from 'styled-components'

import useSearchInput from '../../Hooks/useSearchInput'
import SearchInput from '../SearchInput';
import SearchResults from '../SearchResults'

const Container = styled.div`
  position:absolute;
  width:100%;
`




const SearchBar = ({show,setShow})=>{


  const {state,handleChange} = useSearchInput()


  return(
    <Container>
      {
        show
          ?
            <div>
                <SearchInput state={state.search} handleChange={handleChange} setShow={setShow}/>
                <SearchResults/>
            </div>
          :
        <div></div>
    }
    </Container>
  )

}

export default SearchBar
