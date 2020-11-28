import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  text-align:center;
  margin-bottom:20px;
`
const Title = styled.div`
  font-size:1.3rem;
  color:rgb(30, 130, 87);
  cursor:pointer;
`

const Description = styled.div`
  color:rgba(0, 0, 0, 0.75);
`
const Filter = styled.div`
  color:rgb(30, 130, 87);
  font-size:0.85rem;
  margin-bottom:10px;
  margin-top:10px;
  cursor:pointer;
`

const SearchArticles =({title,description,filters,id})=>{

  return(
    <Container >
      <Link to={`/blog/${id}`}>
        <Title>
          {title}
        </Title>
      </Link>
        <Description>
          {description}
        </Description>
    </Container>
  )
}

export default SearchArticles
