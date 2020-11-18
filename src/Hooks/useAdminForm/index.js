import React,{useState,useEffect} from 'react';
import axiosUtil from '../../utils/AxiosUtil'

const useAdminForm =(validation,axiosCall)=>{

  const [state,setState] = useState({username:'',password:''})
  const [errors,setErrors] = useState({})
  const [isSubmitting,setIsSubmitting] = useState(false)

  const handleChange =(e)=>{
    const {name,value} = e.target
    setState({...state,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log('submitted');
    setErrors(validation(state))
    setIsSubmitting(true);
  }

  useEffect(()=>{
    if(isSubmitting && Object.keys(errors).length === 0){
      // this is where the api call will go
      console.log('the api call')
      axiosCall({username:state.username,password:state.password})
        .then(data=>console.log(data))
        .catch(error =>console.log('ERROR ----> ' + error))

    }
    setIsSubmitting(false)
  },[errors,isSubmitting,state,axiosCall])

  return{
    state,
    errors,
    handleChange,
    handleSubmit
  }

}

export default useAdminForm
