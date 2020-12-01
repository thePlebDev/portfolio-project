import axios from 'axios'
const url ='http://localhost:3000'
// const instance = axios.create({
//   withCredentials:true
// })

axios.defaults.withCredentials = true

let axiosUtil =(function(){
  return{
    async get(location,obj){
      try{
        let data = await axios.get(`${url}${location}`,{params:{obj}}, { withCredentials: true })
         return data
      }
      catch(err){
        console.log(err)
      }

    },

    async post(location,obj){
      try{
        let data = await axios.post(`${url}${location}`, obj, { withCredentials: true })
        return data
      }
      catch(err){
        console.log('ERROR---> ' + err)
      }
    }
  }

}())


export default axiosUtil
