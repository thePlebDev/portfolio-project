import {useState,useEffect} from 'react'


const useThemeHook =(sessionUtil)=>{
  const [theme,setTheme] = useState()

  useEffect(()=>{
    setTheme(sessionUtil())
  },[sessionUtil])

  return{
    theme,
    setTheme
  }
}


export default useThemeHook
