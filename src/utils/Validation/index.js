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
    adminLogin(state){
      let errors={}
      if(!state.username){
        errors.username="please enter a username"
      }
      if(!state.password){
        errors.password="please enter a password"
      }
      return errors
    }
  }
}())


export default utils
