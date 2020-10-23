import styled from 'styled-components';

const BurgerLine1 = styled.div`

  background-color:${props=>props.state ? 'white':'#0f141e'};
  width: 22px;
  height:3px;
  margin:4px 0;

  transition:background-color 2.5s, transform 0.4s;
  transform:${props=>props.state ? 'rotate(-43deg) translate(-5px,6px)' :''};
`
const BurgerLine2 = styled.div`
  transition:background-color 2.5s, transform 0.4s;
  background-color:${props=>props.state ? 'white':'#0f141e'};
  width: 22px;
  height:3px;
  margin:4px 0;
  opacity:${props=>props.state ? 0 :1};
`
const BurgerLine3 = styled(BurgerLine1)`
  transform:${props=>props.state ? 'rotate(47deg) translate(-4px,-4px)' :''};
`

const Container = styled.div`

  padding:12px;
  display:flex;
  margin-top:15px;
  position:relative;
  margin-right:5%;

`
const Text = styled.div`
  color:${props=>props.state ? 'white':'#0f141e'};
  transition:all 2.5s;
  z-index:1;
  align-self:center;
  margin-right:25px;
  text-transform:uppercase;
  letter-spacing:0.2em;
  font-weight:700;
`
const BurgerContainer = styled.div`

  margin-right:10px;
  align-self:center;
  position:absolute;
  right:0;
  z-index:1;

`

export {BurgerLine1,BurgerLine2,BurgerLine3,Container,Text,BurgerContainer}
