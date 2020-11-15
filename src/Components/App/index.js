import React,{useState} from 'react'
import {Switch, Route} from 'react-router-dom'

import NavBar from '../NavBar';
import MinNav from '../MiniNav';
import Home from '../Home'
import BlogHome from '../BlogHome';
import AdminLogin from '../AdminLogin';
import BlogPostEditor from '../BlogPostEditor'



const App =()=>{
  const [state,setState] = useState(false)

  return(
    <div>
      <NavBar state={state} setState={setState}/>
      <MinNav/>
      <Switch>
        <Route exact path="/" render={(props)=>(<Home {...props} state={state} setState={setState}/>)}  />
        <Route exact path="/blog" component={BlogHome} />
        <Route  exact path="/blog/admin" component={AdminLogin} />
        <Route exact path="/blog/admin/post" component={BlogPostEditor} />
      </Switch>
    </div>
  )
}

export default App
