import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'


import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import useApiCall from '../../Hooks/useApiCall'
import axiosUtil from '../../utils/AxiosUtil'
import Loader from '../Loader'

const Container = styled.div`
  width:70%;
  margin:0 auto;
`
const Text = styled.div `
  font-size:2rem;
  font-weight:500;
  text-align:center;
  margin-top:20px;
  margin-bottom:50px;
`
const Filter = styled.div`
font-weight:500;
text-align:center;
margin-top:20px;
font-size:1.2rem;
`

const ArticleCardIndiv = ({match})=>{
let id = match.params.id

const {state,setState} = useApiCall(axiosUtil.get,'/v1/blog/single',id)
console.log('state should be below')
console.log(state)

// it needs an axios function and a location
const renderers = {
  code:({language,value}) =>{
    return <SyntaxHighlighter style={dark} language={language} children={value} />
  }
}


  return(
    <Container>
      {
        state
            ?
            <div>
              <Text>{state.data.title}</Text>
              <ReactMarkdown renderers={renderers} children={state.data.body} />
            </div>
            :
        <Loader/>
      }
    </Container>
  )
}

export default ArticleCardIndiv
