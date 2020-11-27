import React,{useEffect,useState} from 'react'
import styled from 'styled-components'

import SearchArticles from '../SearchArticles'

const Container = styled.div`
  border:1px solid green;
  margin-top:5px;
  background-color:#FDFDFD;
`
const Articles = styled.div`
  broder:1px solid blue;
  background-color:#FDFDFD;
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(350px,1fr));
  grid-gap:2rem;
`
const Text = styled.div`
  margin-left:10%;
  font-size:1.5rem;
  margin-bottom:10px;
`

const SearchResults =()=>{
  const [state,setState] = useState()
  useEffect(()=>{
    let cachedHits = sessionStorage.getItem('posts')
    setState(JSON.parse(cachedHits))
  },[])

  return(
    <Container>
      <Text>Articles</Text>
        <Articles>
            {
              state
                ?
                state.map((item)=>{
                  return <SearchArticles key={item.key} title={item.title} description={item.description} filters={item.filters}/>
                })
                :
                ''
            }
        </Articles>
    </Container>
  )
}

export default SearchResults
