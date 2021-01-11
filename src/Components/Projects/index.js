import React,{useRef,useState} from 'react';
import styled from 'styled-components';
import dogSpotter from '../../Assets/pupFinderPortFolio.png'
import useHoverHook from '../../Hooks/UseHoverHook';

import Modal from '../Modal'

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
  background-color:#e31b6d;
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



const Project =({title,info,tech,github,image})=>{
  const [show,setShow] = useState(false)
  const node = useRef(null)
  const {state} = useHoverHook(node)

  return(
    <>
      <ImageContainer ref={node}>
      <Title state={state} onClick={()=>setShow(true)}>View Info</Title>
        <Image src={image}  state={state} alt={info}/>
      </ImageContainer>
    <Modal state={show} setShow={setShow} title={title} info={info} tech={tech} github={github}/>
    </>
  )
}

export default Project
