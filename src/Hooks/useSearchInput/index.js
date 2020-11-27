import React,{useEffect,useState} from 'react'


const useSearchInput =()=>{
  const [state,setState] = useState({search:''})

  const handleChange=(e)=>{

    const {name,value} = e.target
    setState({...state,[name]:value})
    console.log(state)

  }

  useEffect(()=>{
    console.log('searching the database for -->' + state.search)
  },[state])

  return{
    handleChange,
    state
  }
}

export default useSearchInput
