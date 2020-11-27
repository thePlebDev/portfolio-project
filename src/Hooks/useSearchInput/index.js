import React,{useEffect,useState} from 'react'


const useSearchInput =(searchResults,setSearchResults)=>{
  const [state,setState] = useState({search:''})
  const [searchingState,setSearchingState] = useState()

  const handleChange=(e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})
    setSearchResults(searchingState.filter(item => item.title.includes((state.search))))


  }

  useEffect(()=>{
    let cachedHits = sessionStorage.getItem('posts')
    setSearchingState(JSON.parse(cachedHits))
  },[])

  return{
    handleChange,
    state
  }
}

export default useSearchInput
