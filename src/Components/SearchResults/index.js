import React,{useEffect,useState} from 'react'
import styled from 'styled-components'

const Container = styled.div`

  border:1px solid green;
  margin-top:5px
`
const Articles = styled.div`
  broder:1px solid blue;
  background-color:#FDFDFD;

`



const SearchResults =()=>{
  const [state,setState] = useState()
  useEffect(()=>{
    let cachedHits = sessionStorage.getItem('posts')
    setState(JSON.parse(cachedHits))
  },[])

  return(
    <Container>
        <Articles>
          Articles
          <div>
            {
              state
                ?
                state.map((item)=>{
                  return <div key={item.key}>
                    <div>
                      {item.title}
                    </div>
                    <div>
                      {item.description}
                    </div>
                    <div>
                      {item.filters}
                    </div>
                  </div>
                })
                :
                ''
            }
          </div>
        </Articles>
    </Container>
  )
}

export default SearchResults
