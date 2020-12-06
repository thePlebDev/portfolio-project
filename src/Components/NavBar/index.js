import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import SearchIcon from '@material-ui/icons/Search';

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



const NavBar =({setShow,setTheme,theme})=>{

  const themeSetter = ()=>{
    setTheme(!theme)
    let data = sessionStorage.getItem('theme');
    if(!data){
      sessionStorage.setItem('theme','dark')

    }else{
      sessionStorage.removeItem('theme')
    }
  }


  return(
    <Container>
        <Text>
            <h2>Tristan Elliott</h2>
        </Text>
        <IconContainer>
          <a href="https://www.youtube.com/channel/UCc9o1zG46k4voqOT7C6Ankw" data-testid="link" target="_blank" rel="noreferrer noopener">
            <IconStyle>
              <YouTubeIcon style={{fontSize:'30px',padding:'10px',cursor:'pointer'}}/>
            </IconStyle>
          </a>
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
            <div>
              <IconStyle>
                <SearchIcon style={{fontSize:'30px',padding:'10px',cursor:'pointer'}} data-testid="search" onClick={()=>setShow(true)}/>
              </IconStyle>
            </div>
            <div>
              <button style={{cursor:'pointer'}} onClick={()=>{themeSetter()}}>Change theme</button>
            </div>
        </IconContainer>
    </Container>
  )
}
NavBar.propTypes ={
  setShow:PropTypes.func
}

export default NavBar
