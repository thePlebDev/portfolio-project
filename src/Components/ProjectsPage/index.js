import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';

import dogSpotter from '../../Assets/pupFinderPortFolio.png'
import useHoverHook from '../../Hooks/UseHoverHook'


const Container = styled.div`
    position:relative;

`

const Projects = styled.div`
  width:60%;
  margin:90px auto;
  grid-gap:40px;
  display:grid;
  justify-content:center;
  grid-template-columns:repeat(auto-fit,160px);
  overflow:hidden;
  border:1px solid red;
  padding:40px;

`

const Image = styled.img`
  width:160px;
  height:170px;
  overflow:hidden;
  transition: all .35s ease-in-out;
  display:block;
  opacity:${({state})=>state ? '0.7': '1'};
`



const ImageContainer = styled.div`
    position:relative;
    overflow:hidden;
    background-color:black;
    box-shadow:0px 5px 15px 0 rgba(0,0,0,0.5);

`
const Title = styled.div`
  position:absolute;
  background-color:black;
  color:white;
  left:${({state})=>state ? '20%': '-120px'};
  border-radius:5px;
  padding:5px 12px;
  top:40%;
  text-align:center;
  z-index:9999;
  transition:all .35s ease-in-out;
  cursor:pointer;
`

const ModalContainer = styled.div`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100vh;
  background-color:rgba(0,0,0,0.6);
  display:flex;
  justify-content:center;
  align-items:center;

`
const Modal = styled.div`
  background-color:white;
  height:30%;
  width:40%;
  border-radius:4px;
  @media only screen and (max-width:600px){
    height:40%;
  }
`
const ModalTitle = styled.div`
  margin-bottom:5px;
  font-size:25pt;
  line-height:30pt;
  color:#444;
`
const Description = styled.div`
  color:#c0c0c0;
  font-weight:300;
  font-size: 11pt;
  text-transform:uppercase;
  padding-bottom:15px;
  border-bottom:1px solid rgba(0, 0, 0, 0.1);
`
const Tech = styled.div `
  color:#e31b6d;
`
const CodeButton = styled.button`
  background-color:#e31b6d;
  color:white;
  font-size:15px;
  padding:5px 15px;
  border:none;
  border-radius:4px;
  position:absolute;
  bottom:-110px;
  left:10px;
  margin:0 auto;
  cursor:pointer;
`
const Close = styled.div`
  position:absolute;
  top:0px;
  right:10px;
  display:block;
  width:30px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
`


const ProjectsPage =()=>{
  const node = useRef(null)

  const {state} = useHoverHook(node)

  return(
    <Container>
      <Projects>
        <ImageContainer ref={node}>
        <Title state={state} >View Info</Title>
          <Image src={dogSpotter}  state={state}/>
        </ImageContainer>
      </Projects>
      <ModalContainer>
        <Modal>
          <div style={{position:'relative'}}>
              <ModalTitle>Pup Spotter</ModalTitle>
              <Description>Dog spotting platform</Description>
              <Tech>React / Node / Express / Mongo </Tech>
              <CodeButton>View Code</CodeButton>
              <Close> <CloseIcon style={{color:'#e31b6d',fontSize:'40px'}}/></Close>


          </div>
        </Modal>
      </ModalContainer>
    </Container>
  )
}

export default ProjectsPage
