import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import AdminTextInput from '../Components/AdminTextInput';


//1) (DONE)I need to test the snapshot
//2) (DONE) I need to test that all the major parts render properly
//3) how does it handle no props
//3) how does it handle custom props
//4) simulate event. For forms its a change event
//5) make sure the handleChange function gets called.

describe('testing the AdminTextInput',()=>{
  it('should test the snapshot function',()=>{
    const tree = renderer.create(<AdminTextInput/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render everything properly',()=>{
    const wrapper = shallow(<AdminTextInput/>)
    const container = wrapper.find('[data-testid="container"]')
    const input = wrapper.find('[data-testid="input"]')
    expect(container.length).toBe(1)
    expect(input.length).toBe(1)
  })

  it('should deal with no props accordingly',()=>{
    const wrapper = shallow(<AdminTextInput/>)
    const input = wrapper.find('[data-testid="input"]')
    expect(input.props().name).toBe('enter name prop')
    expect(input.props().state).toBe('enter error prop')
    expect(input.props().value).toBe('enter state prop')
    expect( typeof input.props().onChange).toBe('function')
  })

  it('should deal with custome props accordingly',()=>{
    const mockHandleChange = jest.fn()
    const wrapper = shallow(<AdminTextInput state={'state'} error={'error'} handleChange={mockHandleChange} name={'name'} />)
    const input = wrapper.find('[data-testid="input"]')
    expect(input.props().name).toBe('name')
    expect(input.props().state).toBe('error')
    expect(input.props().value).toBe('state')
    expect( typeof input.props().onChange).toBe('function')
  })

  it('should test the event change',()=>{
    const mockHandleChange = jest.fn()
    const wrapper = shallow(<AdminTextInput state={'state'} error={'error'} handleChange={mockHandleChange} name={'name'} />)
    const input = wrapper.find('[data-testid="input"]')
    input.simulate('change',{
      target:{name:'password',value:'Jack'},
    })
    expect(mockHandleChange.mock.calls.length).toBe(1)
  })
})
