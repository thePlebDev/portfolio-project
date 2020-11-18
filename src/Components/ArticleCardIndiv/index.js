import React from 'react'
import styled from 'styled-components'
import useApiCall from '../../Hooks/useApiCall'
import axiosUtil from '../../utils/AxiosUtil'

const Container = styled.div`
  border:1px solid red;
  width:70%;
  margin:0 auto;
`



const ArticleCardIndiv = ({match})=>{
let a = match.params.id
const {state,setState} = useApiCall(axiosUtil.get,)
// it needs an axios function and a location

  return(
    <Container>
      it do be like that sometimes
    </Container>
  )
}

export default ArticleCardIndiv
