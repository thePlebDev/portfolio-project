import React,{useState} from 'react'
import {Switch, Route} from 'react-router-dom'

import NavBar from '../NavBar'
import Home from '../Home'



const App =()=>{
  const [state,setState] = useState(false)

  return(
    <div>
      <NavBar state={state} setState={setState}/>
      <Switch>
        <Route exact to="/" render={(props)=>(<Home {...props} state={state} setState={setState}/>)} />
      </Switch>
    </div>
  )
}

export default App
