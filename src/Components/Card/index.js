import React,{useState} from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LanguageIcon from '@material-ui/icons/Language';

import AboutCard from '../AboutCard';

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

const Card =({img,data})=>{
  const [show,setShow] = useState(false)
  return(
    <Container>
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <Title onClick={()=>setShow(!show)}> <HelpOutlineIcon/>Tech Specs</Title>
        <Title><GitHubIcon/>code</Title>
        <Title><LanguageIcon/>live site</Title>
      </div>
      <Image src={require("../../Assets/pupFinderPortFolio.png")} alt="project" />
      <AboutCard state={show}/>
    </Container>
  )
}

export default Card
