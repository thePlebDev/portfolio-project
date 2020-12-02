import React from 'react'
import { render, screen,fireEvent} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'


import AdminLogin from '../../Components/AdminLogin';
//make sure the important stuff renders
//will have to mock the
//make sure the events work

describe('testing the AdminLogin',()=>{
  it('tests the username input',()=>{

    const {getByTestId} = render(<AdminLogin/>);
    fireEvent.change(getByTestId('text-input'),{
      target:{name:'username', value:'it do be like that'}
    })
    const input = getByTestId('text-input')
    expect(input.value).toBe('it do be like that')
  //  screen.debug();
  })
  it('test the password input',()=>{
    const { getByTestId } = render(<AdminLogin/>)
    fireEvent.change(getByTestId('password-input'),{
      target:{name:'password',value:'it do go down'}
    })
    const input = getByTestId('password-input')
    expect(input.value).toBe('it do go down')
  })
  it('should test the handleSubmit function',()=>{
    const handleChange = jest.fn(()=>{})
    const handleSubmit = jest.fn((e)=>{e.preventDefault()})

    const useMockHook = jest.fn(()=>{
      return{
        state:{username:'it',password:'be like that'},
        handleChange,
        handleSubmit,
        errors:{},
        redirect:false
      }
    })
    const { getByTestId } = render(<AdminLogin useHook={useMockHook}/>)
    fireEvent.click(getByTestId('submit'))
    expect(handleSubmit.mock.calls.length).toBe(1)
  })


})
