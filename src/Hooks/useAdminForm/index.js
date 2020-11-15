import React,{useState,useEffect} from 'react';


const useAdminForm =(validation)=>{

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
      console.log('the api call')
    }
    setIsSubmitting(false)
  },[errors,isSubmitting])

  return{
    state,
    errors,
    handleChange,
    handleSubmit
  }

}

export default useAdminForm
