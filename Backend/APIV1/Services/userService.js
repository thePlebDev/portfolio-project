const userSubscriber = require('../Subscribers/userSubscriber')

const userService =(function(){

  return{
    async register(username,password){
      try{
        let user = await userSubscriber.findUser(username)
        if(user){
          return{status:100,message:'user already exists'}
        }else{
          let newUser = await userSubscriber.newUser(username,password)
          return newUser
        }
      }
      catch(e){
        return e
      }
    },
  }
}())

module.exports = userService
