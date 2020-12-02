import React from 'react';
import {render,screen, fireEvent} from '@testing-library/react';

import BlogPostEditor from '../../Components/BlogPostEditor';

// test that important stuff renders
// test test the handleChange function
// test the submit functions

describe('testing the BlogPostEditor',()=>{

  it('should test that all the important stuff renders',()=>{
    const {getByTestId,getAllByTestId} = render(<BlogPostEditor/>)
    const input = getAllByTestId('text-input')
    const textarea = getByTestId('textarea')
    expect(input.length).toBe(4)
    expect(textarea).not.toBe(undefined)
  })
  it('should test the handleChange',()=>{
    const {getAllByTestId} = render(<BlogPostEditor />)
    const input = getAllByTestId('text-input')

    for(let i = 0; i < input.length; i++){
        fireEvent.change(input[i],{
          target:{name:`${input[i].name}`,value:'m-lady'}
        })
        expect(getAllByTestId('text-input')[i].value).toBe('m-lady')
    }
  })
it('should test the handleSubmit',()=>{
  const mockHandleSubmit = jest.fn(()=>{
    return{
      state:'it do be like that',
      handleChange:jest.fn(()=>{}),
      handleSubmit:jest.fn((e)=>{
        e.preventDefault()
      }),
      errors:{}
    }
  })
  const {getByTestId} = render(<BlogPostEditor useApiCal={mockHandleSubmit}/>)
  const button = getByTestId('submit')
  fireEvent.click(button)
  expect(mockHandleSubmit.mock.calls.length).toBe(1)
})



})
