
const sessionUtils =(function(){

  return{
    sessionStorage(){
      let data = sessionStorage.getItem('theme')
      if(data){
        return true
      }else{
        return false
      }
    },
    themeSetter(theme,setTheme){
      setTheme(!theme)
      let data = sessionStorage.getItem('theme');
      if(!data){
        sessionStorage.setItem('theme','dark')

      }else{
        sessionStorage.removeItem('theme')
      }
    }
  }
}())

export default sessionUtils
