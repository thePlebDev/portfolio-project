import React,{useState,useEffect} from 'react';
import axiosUtil from '../../utils/AxiosUtil';
import axios from 'axios'


const useBlogPost =(axiosCall,validation,id)=>{
  const [state,setState] = useState({imageLink:'',title:'',description:'',filters:'',body:''})
  const [errors,setErrors] = useState({})
  const [isSubmitting,setIsSubmitting] = useState(false)

  const handleChange =(e)=>{
    const {value,name} = e.target
    setState({...state,[name]:value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('submitted')
    setErrors(validation(state))
    setIsSubmitting(true)
  }

  useEffect(()=>{
    if(isSubmitting && Object.keys(errors).length ===0 ){
      console.log('api call')
      axiosCall('/v1/blog/new',
      {image:state.imageLink,title:state.title,description:state.description,filters:state.filters,body:state.body})
        .then(data=> console.log(data.data))
        .catch(error => console.log('error --> ' +  error))
    }
    setIsSubmitting(false)
  },[errors,isSubmitting,id,axiosCall,state])

  return{
    state,
    errors,
    handleChange,
    handleSubmit
  }
}


export default useBlogPost
