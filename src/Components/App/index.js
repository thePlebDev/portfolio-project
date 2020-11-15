import React,{useState} from 'react'
import {Switch, Route} from 'react-router-dom'

import NavBar from '../NavBar';
import MinNav from '../MiniNav';
import Home from '../Home'
import BlogHome from '../BlogHome';
import AdminLogin from '../AdminLogin';



const App =()=>{
  const [state,setState] = useState(false)

  return(
    <div>
      <NavBar state={state} setState={setState}/>
      <MinNav/>
      <Switch>
        <Route exact path="/" render={(props)=>(<Home {...props} state={state} setState={setState}/>)}  />
        <Route exact path="/blog" component={BlogHome} />
        <Route  path="/blog/admin" component={AdminLogin} />
      </Switch>
    </div>
  )
}

export default App
