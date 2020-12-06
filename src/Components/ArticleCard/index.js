import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

import Filter from '../Filters'

const Container = styled.div`
text-align:center;
margin-bottom:20px;
`

const Description = styled.div`
  width:350px;
  margin:1rem auto;
  padding:10px;
  font-size: 1rem;
  line-height: 1.75rem;
`
const Title = styled.div`
  font-size:1.2em;
  margin-top:1em;
  position:relative;
  ::after{
    content:'';

    width:80px;
    height:2px;
    background-color:red;
    position:absolute;
    left:0;
    bottom:0;
    right:0;
    margin:-5px auto;
  }
`

const ReadMore = styled.div`
  font-size: 0.75rem;
  cursor:pointer;
  color:${({theme})=>theme.text};

`

const FilterContainer =styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`
const defaultImage="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1713&q=80"
const defaultDescription="Click read more to view the whole article"
const defaultTitle="This post deals with JavaScript"
const defaultFilter = "#React"

const ArticleCard =({image=defaultImage,title=defaultTitle,filters=defaultFilter,description=defaultDescription,setBlogState,blogState,id})=>{
  return(
    <Container>
      <img data-testid='image'  style={{height:'200px',width:'350px'}} src={image} alt='city' />

      <Title data-testid='title' >{title}</Title>
      <Description data-testid='description' >{description}</Description>
      <Link to={`/blog/${id}`}>
        <ReadMore data-testid='read-more' > Read more</ReadMore>
      </Link>
    </Container>
  )

}

export default ArticleCard
