import axios from 'axios'
import {config} from '../Constants'
const url ='http://localhost:3001'
// const instance = axios.create({
//   withCredentials:true
// })
axios.defaults.withCredentials = true

let axiosUtil =(function(){

  return{
    async get(location,obj){
      try{
        let data = await axios.get(`${url}${location}`,{params:{obj}},{ crossdomain: true }, { withCredentials: true })
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
