const BlogPost = require('../Models/blogPost.js')

 const blogSubscriber =(function(){

  return{
    async allPosts(){
      let data = await BlogPost.find({})
      return data
    },

    newPost(){},

    SinglePost(){}
  }

}())

module.exports = blogSubscriber
