const express = require('express')
const passport = require('passport');
const userService = require('../Services/userService')

const userRouter = express()

userRouter.post('/register', async (req,res,next)=>{
   const {username,password} = req.body
  const data = await userService.register(username,password).catch(next)

  res.json({data})

 //   let user = await User.findOne(
 //     {username:username}).exec()
 //      .catch(error=>next(error)) // use the promises catch method to send the error to our global error handler.
 //
 //    if(user){
 //        res.json({status:100,message:'user already exists'})
 //    }else{
 //      let newUser = new User({
 //        password:password,
 //        username:username,
 //      });
 //      newUser.save(next)
 //      res.json({status:200,message:'a user was created'})
 //    }
 //
  })

userRouter.post("/login",passport.authenticate('login'),//authenticate pulls out username and password automatically.
// going to leave this one here
  function(req,res,next){ // this gets called on a successful login
    console.log(req.user)
      res.json({
        status:200,
        message:'Login successful n stuff'
      })
  }
)







module.exports = userRouter
