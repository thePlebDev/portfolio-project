import React from 'react';
import Landing from '../Landing';
import useLoading from '../../Hooks/useLoadingAnimation';
import {Or,H4,Title,About,Name} from '../../Stylings/LandingPage';
import {Link} from "react-scroll";
const LandingPage =()=>{
  const {show} = useLoading()

  return(
    <div style={{height:'100vh'}}>
      <Landing />
      <Name state={show}>Tristan Elliott</Name>
      <Title state={show}>Full stack web developer</Title>
      <About state={show}>Living in New Brunswick, Canada. I strive to write the cleanest code possible </About>
      <div style={{display:'flex',marginLeft:'12%'}}>
        <Link to="projects" smooth={true} duration={500} offset={-70}>
          <H4 state={show} >View Projects</H4>
        </Link>
        <Or state={show} style={{alignSelf:'center'}}>-</Or>
        <Link to="contact" smooth={true} duration={800} >
          <H4  state={show}>Contact</H4>
        </Link>
        <Or state={show} style={{alignSelf:'center'}}>-</Or>
        <H4  state={show}>Blog</H4>
      </div>
    </div>
  )
}


export default LandingPage
