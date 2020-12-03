const BlogPost = require('../Models/blogPost.js')

 const blogSubscriber =(function(){

  return{
    async allPosts(){
      try{
        let data = await BlogPost.find({})
        return data
      }
      catch(e){
        return e
      }
    },

    newPost(){},

    SinglePost(){}
  }

}())

module.exports = blogSubscriber
