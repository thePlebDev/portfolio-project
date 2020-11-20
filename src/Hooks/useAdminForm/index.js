import React,{useState,useEffect} from 'react';
import {url} from '../../utils/Constants'

const useAdminForm =(validation,axiosCall)=>{

  const [state,setState] = useState({username:'',password:''})
  const [errors,setErrors] = useState({})
  const [isSubmitting,setIsSubmitting] = useState(false)
  const [redirect,setRedirect] = useState(false)

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
      axiosCall(`${url}user/login`,{username:state.username,password:state.password},{ withCredentials: true })
        .then((data)=>{
            if(data.data.status === 200){
              setRedirect(true)
            }
          })
        .catch(error =>setErrors({username:'incorrect',password:'incorrect'}))

    }
    setIsSubmitting(false)
  },[errors,isSubmitting,state,axiosCall])

  return{
    state,
    errors,
    handleChange,
    handleSubmit,
    redirect
  }

}

export default useAdminForm
