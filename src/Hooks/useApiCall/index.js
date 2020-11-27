import React,{useState,useEffect} from 'react';
import axiosUtil from '../../utils/AxiosUtil'



const useApiCall =(axiosCall,location,id='')=>{
  const [state,setState] = useState()

  useEffect(()=>{
    axiosCall(location,id)
      .then(data=>setState(data.data))
      .catch(error=>console.log('ERROR--> '+ error))
  },[axiosCall,location,id])

  return{
    state,
    setState
  }

}

export default useApiCall
