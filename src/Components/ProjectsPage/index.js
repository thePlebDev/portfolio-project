import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components'
import {CSSTransition,TransitionGroup} from 'react-transition-group';

import Project from '../Projects';

import {allData,frontendData,fullStackData} from '../../Assets/Data/projectData.js';

import './index.css';



const Container = styled.div`
    position:relative;

`
const ProjectContainer = styled.div`
  width:60%;
  margin:0px auto;
  grid-gap:40px;
  display:grid;
  justify-content:center;
  grid-template-columns:repeat(auto-fit,160px);
  overflow:hidden;
  display:relative;
  padding:80px;

`
const FilterContainer = styled.div`
    width:50%;

    margin:0 auto;
    margin-top:50px;
    display:absolute;
    display:flex;
    justify-content:space-between;
`

const Filter = styled.div`
font-size:1.6em;
font-weight:400;
padding:3px 12px;
text-transform:uppercase;
border-radius:5px;
cursor:pointer;
transition:all 0.35s;

color:${({state,data})=>state === data ?'white':''};
background-color:${({state,data})=>state === data ?'#e31b6d':''};
`

const ProjectsPage =({all=allData, front=frontendData,full=fullStackData})=>{
  const [state,setState] = useState(all)


  return(
    <Container>
    <FilterContainer>
      <Filter state={state} data={all} onClick={()=>setState(all)}>All</Filter>
      <Filter state={state} data={full} onClick={()=>setState(fullStackData)}>Full Stack</Filter>
      <Filter state={state} data={front} onClick={()=>setState(frontendData)}>Frontend</Filter>
    </FilterContainer>
        <ProjectContainer>
          {
            state.map((item)=>{
              return(
                        <Project id={item.id} image={item.image}
                            title={item.title} github={item.github}
                            info={item.info} tech={item.tech}/>
                    )
            })
          }
        </ProjectContainer>
    </Container>
  )
}

export default ProjectsPage
