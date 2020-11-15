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
    },
    blogPost(state){
      let errors ={}
        if(!state.imageLink){
          errors.imageLink="please enter image link"
        }
        if(!state.title){
          errors.title ="please enter title"
        }
        if(!state.description){
          errors.description="please enter description"
        }
        if(!state.filters){
          errors.filters ="please enter filters"
        }
        if(!state.body){
          errors.body ="please enter body"
        }
      return errors
    }
  }
}())


export default utils
