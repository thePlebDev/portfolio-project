import React,{useState,useEffect} from 'react';
import axiosUtil from '../../utils/AxiosUtil'



const useApiCall =()=>{
  const [state,setState] = useState()

  useEffect(()=>{
    axiosUtil.get('/v1/blog/all')
      .then(data=>setState(data.data))
      .catch(error=>console.log('ERROR--> '+ error))
  },[])

  return{
    state
  }

}

export default useApiCall
