import React,{useEffect} from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import axios from 'axios';

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import useApiCall from '../../Hooks/useApiCall'
import axiosUtil from '../../utils/AxiosUtil'

const Container = styled.div`
  width:70%;
  margin:0 auto;
`

const ArticleCardIndiv = ({match})=>{
let id = match.params.id

const {state,setState} = useApiCall(axiosUtil.get,'/v1/blog/single',id)
console.log(state)
// useEffect(()=>{
//   axios.get('http://localhost:3000/v1/blog/single',{params:{name:'bob'}})
//     .then(data=>console.log(data.data))
//     .catch(error =>console.log('error ---> ' + error))
// },[])

// it needs an axios function and a location
const renderers = {
  code:({language,value}) =>{
    return <SyntaxHighlighter style={dark} language={language} children={value} />
  }
}

const markdown = `
  Below should demostrate how the console.log() method
  ~~~js
  console.log('this should look funky')
  ~~~

  ## title
`

  return(
    <Container>
      <ReactMarkdown renderers={renderers} children={markdown} />
    </Container>
  )
}

export default ArticleCardIndiv
