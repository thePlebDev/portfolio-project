import React,{useState,useEffect} from 'react';


const useBlogPost =(validation)=>{
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
    }
    setIsSubmitting(false)
  },[errors,isSubmitting])

  return{
    state,
    handleChange,
    handleSubmit
  }
}


export default useBlogPost
