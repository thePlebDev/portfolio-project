import React from 'react';
import {render} from "@testing-library/react";
import userEvent from '@testing-library/user-event'


import NavBar from '../../Components/NavBar'


const mockFunc1 = jest.fn()
const mockFunc2 = jest.fn()

Object.defineProperty(window,"sessionStorage",{
  value:{
    getItem:mockFunc1,
    setItem:mockFunc2
  }
})

describe('testing the home components',()=>{
  it('should test the ui upon render',()=>{
    const {asFragment} = render(<NavBar />);
    expect(asFragment()).toMatchSnapshot();


  });

  it('should test the ui change',()=>{
    const theme = true;
    const setTheme = jest.fn()
    const {getByTestId} = render(<NavBar theme={theme} setTheme={setTheme}/>);

    let toggle = getByTestId('theme-slider')
    userEvent.click(toggle)
    expect(mockFunc1.mock.calls.length).toBe(1)
    expect(mockFunc2.mock.calls.length).toBe(1)

  })

})
