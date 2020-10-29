import React,{useRef,useLayoutEffect,useState} from 'react';
import Card from '../Card'
import styled from 'styled-components'

import LandingPage from '../LandingPage'

const Container = styled.div`
width:100%;
margin:10px auto;
position:relative;
`

const Text = styled.h5`
margin:10px auto;
  color:#878a8f;
  font-size:.875rem;
  letter-spacing:0.4em;
  text-transform:uppercase;
  font-weight:400;
  width:300px;
  text-align:center;
  padding:5px;
  border-bottom: 1px solid #0f141e;

`




const Showcase =()=>{
  const ref = useRef(null)
  const [show,setShow] = useState(false)

  useLayoutEffect(()=>{
    const topPosition = ref.current.getBoundingClientRect().top// the position of our element from the top
    const onScroll =()=>{
        //where we are scrolled to plus the height of the window
      const scrollPosition = window.scrollY + window.innerHeight;
      if(topPosition<scrollPosition){
        // if the top of the element is on the screen. Run the animations
          setShow(true)
          console.log('it is true')
      }

    }
    window.addEventListener("scroll",onScroll);
    return()=> window.removeEventListener("scroll",onScroll)

  })

  return(
    <div>
      <LandingPage/>
      <Text> showcase Projects</Text>
      <Container >
          <div ref={ref} >
              <Card state={show} />
          </div>
      </Container>
    </div>
  )
}

export default Showcase
