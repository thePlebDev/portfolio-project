let utils = (function(){

  return{
    contactForm(state){
        let errors={}
          if(!state.email){
              errors.email ="Enter Email"
          }
          if(!state.name){
              errors.name ="Enter Name"
          }
          if(!state.subject){
            errors.subject = "Enter Subject"
          }
        return errors
    },
  }
}())


export default utils
