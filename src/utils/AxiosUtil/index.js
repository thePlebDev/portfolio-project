import axios from 'axios'

let axiosUtil =(function(){
const url ='http://localhost:3000'
  return{
    async get(location){
      try{
        let a = await axios.get(`${url}${location}`)
         return a
      }
      catch(err){
        console.log(err)
      }

    },
    
    async post(location){

    }
  }

}())


export default axiosUtil
