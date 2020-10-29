import React,{useState,useEffect} from 'react';


const useContactForm = (validation)=>{
  const [state,setState] =useState({name:'',subject:'',email:''})
  const [errors,setErrors] = useState({error:'me'})
  const [isSubmitting,setIsSubmitting] = useState(false)

  const handleChange =(e)=>{
    let {value,name} = e.target
    setState({...state,[name]:value})
  }

  useEffect(()=>{
    if(isSubmitting && Object.keys(errors).length ===0){
      console.log('THE API HAS BEEN SENT')
      setIsSubmitting(false)
    }
  },[errors,isSubmitting])


  const handleSubmit =(e)=>{
    setIsSubmitting(true)
    setErrors(validation(state))
    console.log(errors)
    e.preventDefault()

  }

  return{
    state,
    errors,
    handleChange,
    handleSubmit
  }
}

export default useContactForm
