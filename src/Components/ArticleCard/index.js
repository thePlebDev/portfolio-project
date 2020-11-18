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

`

const FilterContainer =styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`

const ArticleCard =({image,title,filters,description,setBlogState,blogState,id})=>{
  return(
    <Container>
      <img  style={{height:'200px',width:'350px'}} src={image} alt='city' />
      <Filter filters={filters} setBlogState={setBlogState} blogState={blogState}/>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Link to={`blog/${id}`}>
        <ReadMore> Read more</ReadMore>
      </Link>
    </Container>
  )

}

export default ArticleCard
