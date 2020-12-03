const User = require('../Models/User');

const userSubscriber =(function(){
  return{
    async findUser(username){
      try{
        let user = await User.findOne({username:username}).exec()
        return user
      }
      catch(e){
        return e
      }
    },

    async newUser(username,password){
      try{
        let newUser = new User({
          password:password,
          username:username,
        });

        let data = await newUser.save()
        return {message:'user create',data}
      }
      catch(e){
        return e
      }
    }
  }

}())

module.exports = userSubscriber
