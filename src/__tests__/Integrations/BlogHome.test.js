import React from 'react'
import { render, screen, fireEvent} from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom'

import BlogHome from '../../Components/BlogHome';

//test with no state
//test with state

describe('testing the BlogHome component',()=>{
  it('will test what happens when BlogHome is rendered with no state',()=>{
    const {getByTestId}= render(<BlogHome/>)

    expect(getByTestId('loading')).not.toBe(undefined)
  })
  it('should test what happens BlogHome is rendered with state',()=>{
    const useMockApiCall = jest.fn(()=>{
      return{
        state:{posts:[
          {
            _id:1969,
            title:'it is what it is',
            description:'no it isnt'
          }
        ]
        }
      }
    })
    const {getByText,} = render(<Router><BlogHome apiHook={useMockApiCall} /></Router>)
    expect(getByText('it is what it is').textContent).toBe('it is what it is')
    expect(getByText('no it isnt').textContent).toBe('no it isnt')

  })
})
