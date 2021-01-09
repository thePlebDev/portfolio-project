import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components'


import Modal from '../Modal'
import Project from '../Projects'


const Container = styled.div`
    position:relative;

`





const ProjectsPage =()=>{

  return(
    <Container>
      <Project/>
      <Modal/>
    </Container>
  )
}

export default ProjectsPage
