import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import useApiCall from '../../Hooks/useApiCall'
import axiosUtil from '../../utils/AxiosUtil'

const Container = styled.div`
  width:70%;
  margin:0 auto;
`



const ArticleCardIndiv = ({match})=>{
let a = match.params.id
const title = "Object Oriented Programming"
const input = '# Object Oriented Programming \n\n and this is a paragraph'
//const {state,setState} = useApiCall(axiosUtil.get,)
// it needs an axios function and a location
const renderers = {
  code:({language,value}) =>{
    return <SyntaxHighlighter style={dark} language={language} children={value} />
  }
}
const another = `'
Below should demostrate how the console.log() method
~~~js
console.log('this should look funky')
~~~

## title
'`

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
