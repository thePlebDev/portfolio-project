const express = require("express");
const blogService = require('../Services/BlogService')


const blog = express.Router();

function ensureAuthentication(req,res,next){
  console.log(req.user)
  console.log(req.isAuthenticated())
    if(req.isAuthenticated()){
      next()
    }else{
      res.json({
        status:400,
        message:'not allowed'
      })
    }
}

blog.get('/all',async (req,res,next)=>{

  let data = await blogService.allPosts().catch(next)
  res.json({status:200,posts:data})

})

blog.post('/new',ensureAuthentication,async(req,res,next)=>{

  const {image,filters,title,description,body} = req.body
  const data = await blogService.newPost(image,filters,title,description,body).catch(next)
  res.json({status:200,message:data})

})

blog.get('/single', async (req,res,next)=>{
  const {obj} = req.query
  const data = await blogService.singlePost(obj).catch(next)
  res.json({status:200,data})
})

blog.get('/post',ensureAuthentication,function(req,res){
  res.json({status:200,message:'we have access to this route'})
})

module.exports = blog
