import React from 'react';
import styled from 'styled-components'
import dogSpotter from '../../Assets/pupFinderPortFolio.png'

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
  border:1px solid;

`

const Image = styled.img`
  width:160px;
  height:170px;
  overflow:hidden;
  transition: all .35s ease-in-out;
  cursor:pointer;
  display:block;


  &:hover{
    opacity:0.7;
  }
`



const ImageContainer = styled.div`
    position:relative;

    overflow:hidden;
    background-color:black;
`
const Title = styled.div`
  position:absolute;
  top:0;

  z-index:9999;
  transition:all .35s ease-in-out;
  &:hover{
    font-size:30px;
  }
`



const ProjectsPage =()=>{

  return(
    <Container>
      <Projects>
        <ImageContainer>
        <Title>Dog Spotter</Title>
          <Image src={dogSpotter} />
        </ImageContainer>
        <Image/>
        <Image />
        <Image/>
      </Projects>
    </Container>
  )
}

export default ProjectsPage
