import React,{useState,useEffect} from 'react'

import styled from 'styled-components'

import useSearchInput from '../../Hooks/useSearchInput'
import SearchInput from '../SearchInput';
import SearchResults from '../SearchResults'

const Container = styled.div`
  position:absolute;
  width:100%;
`




const SearchBar = ({show,setShow,storage})=>{
  const [searchResults,setSearchResults] = useState()

  useEffect(()=>{
    let cachedHits = sessionStorage.getItem('posts')
    setSearchResults(JSON.parse(cachedHits))
  },[])

  const {state,handleChange} = useSearchInput(searchResults,setSearchResults)
  return(
    <Container>
      {
        show
          ?
            <div>
                <SearchInput state={state.search} handleChange={handleChange} setSearchResults={setSearchResults} searchResults={searchResults} setShow={setShow}/>
                <SearchResults searchResults={searchResults}/>
            </div>
          :
        <div></div>
    }
    </Container>
  )

}

export default SearchBar
