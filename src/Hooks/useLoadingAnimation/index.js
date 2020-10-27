import React,{useState,useEffect} from 'react';


const useLoadingAnimation =()=>{
  const [show,setShow] = useState(false)

  useEffect(()=>{
    setShow(true)
  },[])

  return{
    show,
  }
}

export default useLoadingAnimation
