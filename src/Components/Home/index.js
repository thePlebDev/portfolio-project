import React from 'react';
import ShowModal from '../ShowModal';

const Home =({state,setState})=>{

  return(
    <div>
      <h1>This is the home page</h1>
        <ShowModal state={state} />
    </div>
  )
}


export default Home
