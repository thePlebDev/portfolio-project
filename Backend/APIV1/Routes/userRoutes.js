const express = require('express')
const User = require('../Models/User.js')
const passport = require('passport');

const userRouter = express()

userRouter.post('/register', async (req,res,next)=>{
  const {username,password} = req.body

   let user = await User.findOne(
     {username:username}).exec()
      .catch(error=>next(error)) // use the promises catch method to send the error to our global error handler.

    if(user){
        res.json({status:100,message:'user already exists'})
    }else{
      let newUser = new User({
        password:password,
        username:username,
      });
      newUser.save(next)
      res.json({status:200,message:'a user was created'})
    }
})

userRouter.post("/login",passport.authenticate('login'),//authenticate pulls out username and password automatically.
  function(req,res,next){ // this gets called on a successful login
    console.log(req.user)
      res.json({
        status:200,
        message:'Login successful n stuff'
      })
  }
)







module.exports = userRouter
