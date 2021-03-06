import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

import sessionStorage from '../../utils/WindowSessions'
import PropTypes from 'prop-types'


import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';


//import useLoading from '../../Hooks/useLoadingAnimation'

const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  text-align:center;
  padding-bottom:20px;
  border-bottom:1px solid rgba(0, 0, 0, 0.5);

  @media only screen and (min-width: 1050px){
    flex-direction:row;
    justify-content:space-around;
    padding-bottom:0px;

  }
`
const Text = styled.div`
  font-size:1.4rem;
  color: ${({theme})=>theme.text};
  text-transform: uppercase;
  cursor:pointer;
`
const IconContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`


const IconStyle = styled.span`
  color:${({theme})=>theme.text}
`
const Switch = styled.label`
  position:relative;
  display:block;
  width:60px;
  height:30px;

`

const Checkbox = styled.input`

`
const Slider = styled.span`
position:absolute;
cursor:pointer;
top:0; left:0; right:0; bottom:0;
background:${({theme})=>theme.text};
transition:.25s;
border-radius:10%;

&:before{
  content:'';
  position:absolute;
  border-radius:10%;
  transition:.2s all linear;
  transform:${({state})=>state ? 'translateX(4px)':'translateX(-30px)'};
  width:43%;
  height:100%;
  background-color:red;
}

`

const NavBar =({setShow,setTheme,theme,themeGrabber=sessionStorage.themeSetter})=>{



  return(
    <Container>
        <Text>
            <h2>Tristan Elliott</h2>
        </Text>
        <IconContainer>

            <a href="https://twitter.com/Tristanthewebd1" target="_blank" data-testid="link" rel="noreferrer noopener">
              <IconStyle>
                <TwitterIcon style={{fontSize:'30px',padding:'10px',cursor:'pointer'}}/>
              </IconStyle>
            </a>
            <a href="https://github.com/thePlebDev" target="_blank" data-testid="link" rel="noreferrer noopener">
              <IconStyle>
                <GitHubIcon style={{fontSize:'30px',padding:'10px',cursor:'pointer'}}/>
              </IconStyle>
            </a>
            

              <Switch htmlFor="theme">
                <Checkbox id="theme" type="checkbox" data-testid="theme-slider" onClick={()=>{themeGrabber(theme,setTheme)}}/>
                <Slider state={theme}></Slider>
              </Switch>


        </IconContainer>
    </Container>
  )
}
NavBar.propTypes ={
  setShow:PropTypes.func
}

export default NavBar
