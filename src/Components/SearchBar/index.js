import React,{useState,useEffect} from 'react'

import styled from 'styled-components';
import PropTypes from 'prop-types';

import useSearchInput from '../../Hooks/useSearchInput'
import SearchInput from '../SearchInput';
import SearchResults from '../SearchResults'

const Container = styled.div`
  position:absolute;
  width:100%;
  z-index:999999999999;
`




const SearchBar = ({show,setShow})=>{
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
            <div data-testid="showTrue">
                <SearchInput state={state.search} handleChange={handleChange} setSearchResults={setSearchResults} searchResults={searchResults} setShow={setShow}/>
                <SearchResults searchResults={searchResults}/>
            </div>
          :
            <div data-testid="showFalse"></div>
    }
    </Container>
  )

}

SearchBar.propTypes ={
  show:PropTypes.bool,
  setShow:PropTypes.func
}
SearchBar.defaultProps ={
  show:false,
  setShow:()=>{console.log('ENTER A PROPER SET SHOW FUNCTION')}
}

export default SearchBar
