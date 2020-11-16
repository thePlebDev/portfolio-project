const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("B4c0/\/",salt)


const UserSchema = mongoose.Schema({
  createdAt:{type:Date,default:Date.now},
  username:{type:String,required:true,unique:true},
  password:{type:String,required:true}
})

UserSchema.pre("save",function(done){
  let user = this;// this is saving a reference to the user. inner functions have different this values
  if(!user.isModified('password')){
    return done()
  }
  //now we have to generate a salt for the hash
  if(user.password){
    bcrypt.genSalt(10,function(err,salt){
      if(err) return done()
      bcrypt.hash(user.password,salt,null,function(err,hash){
        if(err)return done(err);
        user.password = hash;
        done()
      })
    })
  }

})

UserSchema.methods.checkPassword = function(guess,done){
  bcrypt.compare(guess,this.password,function(err,isMatch){
    done(err,isMatch)
  });
};


const User = mongoose.model("User",UserSchema)


module.exports = UserSchema
