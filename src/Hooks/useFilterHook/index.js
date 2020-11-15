import React from 'react';



const useFilter =(setBlogState,blogState)=>{

  const filterValue = (arrays,value)=>{
    for(let i = 0;i< arrays.length;i++){
      if(arrays[i] === value){
        return true
      }
    }
  }

  const handleClick =(e)=>{
    let value = e.target.textContent

  let newState = blogState.filter(item => filterValue(item.filters,value)  )
  setBlogState(newState)
  console.log(newState)
  }

  return{
    handleClick
  }
}

export default useFilter
