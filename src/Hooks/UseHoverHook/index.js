import {useState,useEffect} from 'react'

const useHoverHook =(node)=>{
    const [state,setState] = useState()

  const handleHover =(e)=>{
    if(node.current.contains(e.target)){
      setState(true)
    }else{
      setState(false)
    }
  }
  const handleExit =()=>{
    setState(false)
  }

  useEffect(()=>{
    let current = node.current
    current.addEventListener("mouseenter",handleHover)

    return()=>{
      current.removeEventListener('mouseenter',handleHover)
    }
  },[node])

  useEffect(()=>{
    let current = node.current
    current.addEventListener("mouseleave",handleExit)

    return()=>{
      current.addEventListener("mouseleave",handleExit)
    }
  },[node])

  return{
    state
  }

}

export default useHoverHook
