import Crypto from '../../Components/Crypto'
import React from 'react';
import {render,screen, fireEvent} from '@testing-library/react';



describe('testing the Crypto component',()=>{
  it('should render everything normaly',()=>{
    const {getByRole} = render(<Crypto/>)
    expect(getByRole('button')).not.toBe(undefined)
  })

  it('should test the mocked function',()=>{
    const mockFunc = jest.fn()
    const {getByRole} = render(<Crypto handleChange={mockFunc} />)
    const button = getByRole('button')
    fireEvent.click(button)
    expect(mockFunc.mock.calls.length).toBe(1)

  })
})
