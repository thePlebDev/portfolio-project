import React,{useState} from 'react'
import {Switch, Route} from 'react-router-dom'

import NavBar from '../NavBar';
import MinNav from '../MiniNav';
import Home from '../Home';
import BlogHome from '../BlogHome';
import AdminLogin from '../AdminLogin';
import BlogPostEditor from '../BlogPostEditor';
import ArticleCardIndiv from '../ArticleCardIndiv';
import Crypto from '../Crypto'
import SearchBar from '../SearchBar';
import GlobalStyle from '../../Stylings/Global'
import {lightTheme, darkTheme} from '../../Stylings/Themes/darkMode';


import { ThemeProvider } from 'styled-components';

import useSessionStorageHook from '../../Hooks/useSessionStorageHook'
import useThemeHook from '../../Hooks/useThemeHook'
import sessionUtils from '../../utils/WindowSessions'



const App =()=>{
  const [state,setState] = useState(false)
  const [show,setShow] = useState(false)
  const [theme,setTheme] = useState(sessionUtils.sessionStorage()) // 90% sure this is not good code
  //above should probably be a custom hook
//const {theme,setTheme} = useThemeHook(sessionUtils.sessionStorage)
  useSessionStorageHook()

  return(
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
    <GlobalStyle />
      <NavBar state={state} setState={setState} data-testid="navbar" setShow={setShow} setTheme={setTheme} theme={theme}/>
      <MinNav data-testid="mininavbar" />
      <SearchBar show={show} setShow={setShow}/>
      <Switch>
        <Route exact path="/" render={(props)=>(<Home {...props} state={state} setState={setState}/>)}  />
        <Route exact path="/blog" component={BlogHome} />
        <Route exact path="/blog/admin" component={AdminLogin} />
        <Route exact path="/blog/admin/post" component={BlogPostEditor} />
        <Route exact path="/blog/:id" component={ArticleCardIndiv} />
        <Route exact path="/crypto" component={Crypto} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
