import React from 'react';

import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';

import LandingPage from '../Components/LandingPage'


describe('testing the LandingPage component',()=>{
  let wrapper;
  let mockUseHook = jest.fn(()=>{
    return{
      show:true
    }
  })
  beforeEach(()=>{
    wrapper = shallow(<LandingPage useHookCall={mockUseHook}/>)
  })

  it('should be testing the snapshot',()=>{
    const tree = renderer.create(<LandingPage/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render the proper stuff',()=>{
    expect(wrapper.find('[data-testid="name"]').length).toBe(1)
    expect(wrapper.find('[data-testid="title"]').length).toBe(1)
    expect(wrapper.find('[data-testid="about"]').length).toBe(1)
  })
  it('should test the mock function being called',()=>{
    expect(wrapper.find('[data-testid="name"]').props().state).toBe(true)
    expect(wrapper.find('[data-testid="title"]').props().state).toBe(true)
    expect(wrapper.find('[data-testid="about"]').props().state).toBe(true)

    expect(mockUseHook.mock.calls.length).toBe(3)
  })
})
