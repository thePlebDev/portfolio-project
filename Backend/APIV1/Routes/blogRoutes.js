const express = require("express");
const BlogPost = require('../Models/blogPost')


const blog = express.Router();

function ensureAuthentication(req,res,next){
    if(req.isAuthenticated()){
      next()
    }else{
      res.json({
        status:400,
        message:'not allowed'
      })
    }
}

blog.get('/all',async (req,res)=>{

  let posts = await BlogPost.find({})
  res.json({status:200,posts:posts})
})

blog.post('/new',ensureAuthentication,async(req,res,next)=>{
  const {image,filters,title,description,body} = req.body
  const newBlogPost = new BlogPost({
    image,
    filters,
    title,
    description,
    body
  })
  newBlogPost.save(function(err){
    if(err) return next(err)
    res.json({status:200,message:'Blog Post created'})
  })
})

blog.get('/post',ensureAuthentication,function(req,res){
  res.json({status:200,message:'we have access to this route'})
})

module.exports = blog
