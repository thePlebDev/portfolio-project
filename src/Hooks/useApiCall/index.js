import React,{useState,useEffect} from 'react';
import axiosUtil from '../../utils/AxiosUtil'



const useApiCall =(axiosCall,location)=>{
  const [state,setState] = useState()

  useEffect(()=>{
    axiosCall(location)
      .then(data=>setState(data.data.posts))
      .catch(error=>console.log('ERROR--> '+ error))
  },[axiosCall,location])

  return{
    state,
    setState
  }

}

export default useApiCall
