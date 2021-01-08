import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components'
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
    </Container>
  )
}

export default ProjectsPage
