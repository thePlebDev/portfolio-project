import React,{useState} from 'react';
import styled from 'styled-components';

import articleData from '../ArticleData';
import ArticleCard from '../ArticleCard';


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
  const [blogState,setBlogState] = useState(articleData)
  return(
    <Container >
      <H1>Articles</H1>
      <ArticleContainer>
        {
          blogState.map((item,index)=>{
            return <ArticleCard setBlogState={setBlogState} blogState={blogState} key={index} image={item.image} filters={item.filters} title={item.title} description={item.description} />
          })
        }
      </ArticleContainer>
    </Container>
  )
}


export default BlogHome
