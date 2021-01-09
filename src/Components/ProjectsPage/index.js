import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components'

import Project from '../Projects'


const Container = styled.div`
    position:relative;
`
const ProjectContainer = styled.div`
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


const ProjectsPage =()=>{
  const data =[
    {
      title:'Pup Spotter',
      info:'Dog spotting platform',
      tech:'React / Node / Express / Mongo',
      github:'https://github.com/thePlebDev/pupSpotter',
      id:0
    },
    {
      title:'Personal',
      info:'Portfolio Page',
      tech:'React / React Testing Library',
      github:'https://github.com/thePlebDev/portfolio-project',
      id:1
    }
  ]

  return(
    <Container>
      <ProjectContainer>
        {
          data.map((item)=>{
            return <Project id={item.id} title={item.title} github={item.github} info={item.info} tech={item.tech}/>
          })
        }

      </ProjectContainer>
    </Container>
  )
}

export default ProjectsPage
