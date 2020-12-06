import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {CSSTransition,TransitionGroup} from 'react-transition-group'

import axiosUtil from '../../utils/AxiosUtil'



import ArticleCard from '../ArticleCard';
import useApiCall from '../../Hooks/useApiCall'
import Loader from '../Loader';
import './index.css'


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

const BlogHome =({apiHook=useApiCall})=>{
  const {state,setState} = apiHook(axiosUtil.get,'/v1/blog/all')
  //const [blogState,setBlogState] = useState(state)
  console.log(state)


  return(
    <Container>
      <H1>Articles</H1>
      <TransitionGroup>
      <ArticleContainer data-testid="container">
        {
          state
            ?
          state.posts.map((item,index)=>{
            return <CSSTransition key={item._id} timeout={500} classNames="item" in={true}>
                      <ArticleCard  id={item._id} setBlogState={setState} blogState={state} image={item.image} filters={item.filters} title={item.title} description={item.description} />
                   </CSSTransition>
          })
          :
          <Loader/>
        }
        </ArticleContainer>
        </TransitionGroup>
    </Container>
  )
}


export default BlogHome
