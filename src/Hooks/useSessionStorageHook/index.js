import React,{useState,useEffect} from 'react'
import useApiCall from '../useApiCall'
import axiosUtil from '../../utils/AxiosUtil'


const useSessionStorageHook=()=>{
  const {state,setState} = useApiCall(axiosUtil.get,'/v1/blog/all')
  const [storage,setStorage] = useState('')


  useEffect(()=>{
    // this will run only if we get a state back and there isnt already a sessionStorage item called posts
    if(state && !sessionStorage.getItem('posts')){
      sessionStorage.setItem('posts',JSON.stringify(state.posts))
      let cachedHits = sessionStorage.getItem('posts')
      setStorage(JSON.parse(cachedHits))
    }
  },[state,setStorage])

  return{
    storage
  }
}

export default useSessionStorageHook
