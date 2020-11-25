import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import AdminPasswordInput from '../Components/AdminPasswordInput'

// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
//
// configure({ adapter: new Adapter() });


//1) (DONE) test snapshow
//2) testing props, what goes in and what comes out
//3) testing the type of the props
//4) event testing
//5) testing conditions, all posible conditions that can happen to the component
//6) state testing,1) check state before event. 2)check state after event.


describe('testing the AdminPasswordInput component',()=>{
  it('should test the snapshot properly',()=>{
    const tree = renderer.create(<AdminPasswordInput/>).toJSON();
    expect(tree).toMatchSnapshot()
  })
  it('should render properly',()=>{
    const wrapper = shallow(<AdminPasswordInput/>)
    const container = wrapper.find('[data-testid="container"]')
    const input = wrapper.find('[data-testid="input"]')
    expect(input.length).toBe(1)
    expect(container.length).toBe(1)
  })
  it('should render with the proper values',()=>{
    let state = 'this'
    const mockHandleChange =jest.fn(x=>42 +x)

    const wrapper = shallow(<AdminPasswordInput state={state} handleChange={mockHandleChange} error={'there do be errors in here'}/>)
    let input = wrapper.find('[data-testid="input"]')
    input.simulate('change',{
      target:{name:'password',value:'Jack'},
    })
    expect(input.props().state).toBe('there do be errors in here')
    expect(mockHandleChange.mock.calls.length).toBe(1)
  })
})
