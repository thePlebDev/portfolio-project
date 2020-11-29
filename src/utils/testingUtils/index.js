

const testingUtil =(function(){
  return{
    validation(state){
      let errors = {}

      if(!state.name){
        errors.name = 'enter name'
      }
      return errors
    }
  }

}())

export default testingUtil
