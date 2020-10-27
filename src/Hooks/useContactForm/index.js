import React,{useState} from 'react';


const useContactForm = ()=>{
  const [state,setState] =useState({header:'',subject:''})
  const [errors,setErrors] = useState({})

  const handleChange =(e)=>{
    let {value,name} = e.target
    setState({...state,[name]:value})
    console.log(value)
    console.log(name)
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
