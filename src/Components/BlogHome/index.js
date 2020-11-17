import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import axiosUtil from '../../utils/AxiosUtil'

import articleData from '../ArticleData';
import ArticleCard from '../ArticleCard';
import useApiCall from '../../Hooks/useApiCall'


const  Container= styled.div`
  position:relative;
`


const H1 = styled.h1`
  opacity:0.7;
  text-align:center;
  position:relative;
  ::after{
    content:"";
    background-color: red;
    height:2px;
    width:50px;
    bottom:0;
    left:0;
    right:0;
    margin:0 auto;
    position:absolute;
  }
`

const ArticleContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(350px,1fr));
    grid-gap:2rem;
`



const BlogHome =()=>{
  const {state,setState} = useApiCall(axiosUtil.get,'/v1/blog/all')
  //const [blogState,setBlogState] = useState(state)
  console.log(state)

  // useEffect(()=>{
  //   if(state){
  //     sessionStorage.setItem('posts',JSON.stringify(state.posts))
  //   }
  // },[state])

  return(
    <Container >
      <H1>Articles</H1>
      <ArticleContainer>
        {
          state
            ?
          state.map((item,index)=>{
            return <ArticleCard setBlogState={setState} blogState={state} key={index} image={item.image} filters={item.filters} title={item.title} description={item.description} />
          })
          :
          ''
        }
      </ArticleContainer>
    </Container>
  )
}


export default BlogHome
