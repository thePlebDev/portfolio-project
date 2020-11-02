import styled from 'styled-components'

const Name = styled.h5`
  font-weight: 400;
  letter-spacing: .4em;
  color: #878a8f;
  font-size: .875rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  margin-left:12%;
  transition:all 2s;
  opacity:${props=>props.state?'1':'0'};
`
const Title = styled.h1`
  margin-top:0;
  font-weight: 800;
  letter-spacing: -.01em;
  color: #0f141e;
  margin-left:12%;
  transition:all 2s;
  opacity:${props=>props.state?'1':'0'};
`
const About = styled.h3`
  font-weight: 500;
  color: #878a8f;
  letter-spacing: normal;
  margin-left:12%;
  transition:all 2s;
  opacity:${props=>props.state?'1':'0'};
`
const H4 = styled.h4`
  font-weight: 800;
  font-size: 1.125rem;
  color: #0f141e;
  transition:all 2s;
  opacity:${props=>props.state?'1':'0'};
  cursor:pointer;
`
const Or = styled.span`
  font-style: normal;
  font-size: 16px;
  line-height: 1.5625rem;
  font-weight: 500;
  letter-spacing: normal;
  color:#878a8f;
  margin-top:3px;
  margin-left:10px;
  margin-right:10px;
  transition:all 2s;
  opacity:${props=>props.state?'1':'0'};
`

export {Or,H4,Title,About,Name};
