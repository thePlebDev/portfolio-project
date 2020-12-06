
const sessionUtils =(function(){

  return{
    sessionStorage(){
      let data = sessionStorage.getItem('theme')
      if(data){
        return true
      }else{
        return false
      }
    }
  }
}())

export default sessionUtils
