import React from 'react';
import styled from 'styled-components'
import dogSpotter from '../../Assets/pupFinderPortFolio.png'

const Container = styled.div`
    position:relative;
`

const Projects = styled.div`
  width:60%;
  margin:60px auto;
  border:1px solid;
  height:300px;
  display:grid;
  align-items:center;
  grid-template-columns:repeat(auto-fit,minmax(240px, 1fr))

`

const Image = styled.img`
  border:1px solid red;
  height:100%;
  width:100%;
`







const ProjectsPage =()=>{

  return(
    <Container>
      <Projects>
        <Image src={dogSpotter}/>
        <Image src={dogSpotter}/>
      </Projects>
    </Container>
  )
}

export default ProjectsPage
