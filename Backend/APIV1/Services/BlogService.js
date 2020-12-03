const blogSubscriber = require('../Subscribers/blogSubScriber')



const blogService=(function(){

  return{
    async allPosts(){
      try{
        let data = await blogSubscriber.allPosts()
        return data
      }
      catch(e){
        return e
      }

    },

    async newPost(image,filters,title,description,body){
      try{
        let data = await blogSubscriber.newPost(image,filters,title,description,body)
        return data
      }
      catch(e){
        return e
      }
    },

    SinglePost(){},
  }
}());

module.exports = blogService
