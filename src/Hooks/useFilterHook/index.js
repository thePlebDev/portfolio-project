import React from 'react';



const useFilter =(setBlogState,blogState)=>{

  //console.log(blogState.posts)
  const handleClick =(e)=>{
    let value = e.target.textContent

  let newState = blogState.filter(item => item.filters === value  )
  setBlogState(newState)
  console.log(newState)
  }

  return{
    handleClick
  }
}

export default useFilter
