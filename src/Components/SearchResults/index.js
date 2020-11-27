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
  text-align:center;
  font-size:1.5rem;
  margin-top:10px;
  margin-bottom:10px;
  position:relative;
  &:after{
    content:'';
    height:2px;
    width:80px;
    margin:0 auto;
    position:absolute;
    background-color:rgb(30, 130, 87);
    left:0;
    right:0;
    bottom:0;

  }
`

const SearchResults =({searchResults})=>{

  return(
    <Container>
      <Text>Articles</Text>
        <Articles>
            {
              searchResults && searchResults.length !== 0
                ?
                searchResults.map((item)=>{
                  return <SearchArticles key={item._id} id={item._id} title={item.title} description={item.description} filters={item.filters}/>
                })
                :
                <div style={{textAlign:'center',fontSize:'30px',margin:'10px'}}>No articles found</div>
            }
        </Articles>
    </Container>
  )
}

export default SearchResults
