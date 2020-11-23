import React from 'react';
import Landing from '../Landing';
import useLoading from '../../Hooks/useLoadingAnimation';
import {Or,H4,Title,About,Name} from '../../Stylings/LandingPage';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Link} from "react-scroll";
const LandingPage =()=>{
  const {show} = useLoading()

  return(
    <div style={{height:'100vh'}}>
      <Landing />
      <Name state={show}>Tristan Elliott</Name>
      <Title state={show}>Full stack web developer</Title>
      <About state={show}>
        Living in New Brunswick, Canada. Connect with me on twitter
        <a href="https://twitter.com/Tristanthewebd1" target="_blank" rel="noreferrer noopener">
          <TwitterIcon style={{marginLeft:'5px',color:'#1DA1F2',fontSize:'30px'}}/>
        </a>
      </About>
      
    </div>
  )
}


export default LandingPage
