import React,{useState} from 'react'
import {Switch, Route} from 'react-router-dom'

import NavBar from '../NavBar';
import MinNav from '../MiniNav';
import Home from '../Home'
import BlogHome from '../BlogHome';
import AdminLogin from '../AdminLogin';
import BlogPostEditor from '../BlogPostEditor';
import ArticleCardIndiv from '../ArticleCardIndiv';
import ProjectsPage from '../ProjectsPage'



const App =()=>{
  const [state,setState] = useState(false)

  return(
    <div>
      <NavBar state={state} setState={setState} data-testid="navbar"/>
      <MinNav data-testid="mininavbar"/>
      <Switch>
        <Route exact path="/" render={(props)=>(<Home {...props} state={state} setState={setState}/>)}  />
        <Route exact path="/blog" component={BlogHome} />
        <Route exact path="/blog/admin" component={AdminLogin} />
        <Route exact path="/blog/admin/post" component={BlogPostEditor} />
        <Route exact path="/blog/:id" component={ArticleCardIndiv} />
        <Route exact path="/projects" component={ProjectsPage} />
      </Switch>
    </div>
  )
}

export default App
