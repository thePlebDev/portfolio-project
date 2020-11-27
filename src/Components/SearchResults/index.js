import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align:center;
  border:1px solid green;
  margin-top:5px
`


const SearchResults =()=>{

  return(
    <Container>
        <div style={{border:'1px solid green'}}>
          Articles
        </div>
    </Container>
  )
}

export default SearchResults
