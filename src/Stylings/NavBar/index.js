import styled from 'styled-components';

const BurgerLine1 = styled.div`
  width: 22px;
  height:3px;
  background-color:black;
  margin:4px 0;
  transition:all 0.4s ease;
  transform:${props=>props.state ? 'rotate(-43deg) translate(-5px,6px)' :''};
`
const BurgerLine2 = styled.div`
transition:all 0.4s ease;
  width: 22px;
  height:3px;
  background-color:black;
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
`
const Text = styled.div`
  align-self:center;
  margin-right:15px;
  color:#0f141e;
  
  text-transform:uppercase;
  letter-spacing:0.2em;
  font-weight:700;
`
const BurgerContainer = styled.div`
  margin-right:10px;
  align-self:center;

`

export {BurgerLine1,BurgerLine2,BurgerLine3,Container,Text,BurgerContainer}
