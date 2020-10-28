import React,{useState} from 'react';


const useContactForm = ()=>{
  const [state,setState] =useState({name:'',subject:''})
  const [errors,setErrors] = useState({})

  const handleChange =(e)=>{
    let {value,name} = e.target
    setState({...state,[name]:value})
    console.log(state)
  }

  const handleSubmit =(e)=>{
    console.log('ya boy got submitted');
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
