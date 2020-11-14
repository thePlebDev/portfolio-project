import React,{useState,useEffect} from 'react';
import styled from 'styled-components'

import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import SearchIcon from '@material-ui/icons/Search';

import useLoading from '../../Hooks/useLoadingAnimation'

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
  color: rgba(0, 0, 0, 0.75);
  text-transform: uppercase;
  cursor:pointer;
`
const IconContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`



const NavBar =({state,setState})=>{
  const {show} = useLoading()

  return(
    <Container>
        <Text>
            <h2>Tristan Elliott</h2>
        </Text>
        <IconContainer>
            <YouTubeIcon style={{fontSize:'30px',padding:'10px',cursor:'pointer'}}/>
            <TwitterIcon style={{fontSize:'30px',padding:'10px',cursor:'pointer'}}/>
            <GitHubIcon style={{fontSize:'30px',padding:'10px',cursor:'pointer'}}/>
            <SearchIcon style={{fontSize:'30px',padding:'10px',cursor:'pointer'}}/>
        </IconContainer>
    </Container>
  )
}

export default NavBar
