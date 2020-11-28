import React from 'react';
import styled from 'styled-components';

import Landing from '../Landing';
import useLoading from '../../Hooks/useLoadingAnimation';
import {Or,H4,Title,About,Name} from '../../Stylings/LandingPage';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Link} from "react-scroll";

const Text = styled.span`
color:#1DA1F2;
border-bottom:1px solid #1DA1F2;
cursor:pointer;


`



const LandingPage =({useHookCall=useLoading})=>{
  const {show} = useHookCall()

  return(
    <div >
      <Landing />
      <Name state={show} data-testid="name">Tristan Elliott</Name>
      <Title state={show} data-testid="title">Full stack web developer</Title>
      <About state={show} data-testid="about">
        Living in New Brunswick, Canada. Connect with me on
        <a href="https://twitter.com/Tristanthewebd1" target="_blank" rel="noreferrer noopener">
          <Text> twitter</Text>
        </a>
      </About>

    </div>
  )
}


export default LandingPage
