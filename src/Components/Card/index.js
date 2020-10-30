import React,{useState} from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LanguageIcon from '@material-ui/icons/Language';
import AboutCard from '../AboutCard';

import {card1} from '../TechSpecsData'

const Image = styled.img`
  width:75%;
  height:100%;
  box-shadow:0 5px 25px rgba(0,0,0,0.25);
  transition:all .3s;

  &:hover{
    box-shadow:0 5px 60px rgba(0,0,0,0.25);
  }
`
const Container = styled.div`
  text-align:center;
  transition:transform 1s;
  transform:${props=>props.state ? 'translateX(0)':'translateX(-1000px)'};
  transition: transform 1s;

  position:relative;

`
const Title = styled.h2`
color:#878a8f;
font-size:.875rem;
letter-spacing:0.4em;
text-transform:uppercase;
font-weight:400;

text-align:center;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;

`

const Card =({img,data,state})=>{
  const [show,setShow] = useState(false)
  return(
    <Container state={state}>
      <div style={{display:'flex',justifyContent:'space-around'}} id="projects">
        <Title onClick={()=>setShow(!show)}> <HelpOutlineIcon/>Tech Specs</Title>
        <a href="https://github.com/thePlebDev/portfolio-project" target="_blank" rel="noopener noreferrer">
          <Title>
              <GitHubIcon/>
              code
          </Title>
        </a>
        <Title><LanguageIcon/>live site</Title>
      </div>
      <Image src={require("../../Assets/pupFinderPortFolio.png")} alt="project" />
      <AboutCard state={show} data={card1}/>
    </Container>
  )
}

export default Card
