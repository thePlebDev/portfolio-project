import React,{useState,useEffect,useRef} from 'react';
import styled from 'styled-components'
import {CSSTransition,TransitionGroup} from 'react-transition-group';

import Project from '../Projects';

import {allData,frontendData,fullStackData} from '../../Assets/Data/projectData.js';



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
`


const Filter1 = styled(Filter)`

  color:${({state})=>state === allData ?'white':''};
  background-color:${({state})=>state === allData ?'#e31b6d':''};
`
const Filter2 = styled(Filter)`
  color:${({state})=>state === fullStackData   ?'white':''};
  background-color:${({state})=>state === fullStackData ?'#e31b6d':''};
`

const Filter3 = styled(Filter)`
  color:${({state})=>state === frontendData   ?'white':''};
  background-color:${({state})=>state === frontendData ?'#e31b6d':''};
`



const ProjectsPage =()=>{
  const [state,setState] = useState(allData)


  return(
    <Container>
    <FilterContainer>
      <Filter1 state={state} onClick={()=>setState(allData)}>All</Filter1>
      <Filter2 state={state} onClick={()=>setState(fullStackData)}>Full Stack</Filter2>
      <Filter3 state={state} onClick={()=>setState(frontendData)}>Frontend</Filter3>
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
