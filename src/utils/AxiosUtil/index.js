import axios from 'axios'
const url ='http://localhost:3000'
let axiosUtil =(function(){
  return{
    async get(location){
      try{
        let data = await axios.get(`${url}${location}`)
         return data
      }
      catch(err){
        console.log(err)
      }

    },

    async post(location,obj){
      try{
        let data = await axios.post(`${location}`,obj)
        return data
      }
      catch(err){
        console.log('ERROR---> ' + err)
      }
    }
  }

}())


export default axiosUtil
