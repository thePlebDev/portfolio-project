const express = require("express");
const BlogPost = require('../Models/blogPost')


const blog = express.Router();

blog.get('/all',async (req,res)=>{

  let posts = await BlogPost.find({})
  res.json({status:200,posts:posts})
})

blog.post('/new',async(req,res,next)=>{
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

module.exports = blog
