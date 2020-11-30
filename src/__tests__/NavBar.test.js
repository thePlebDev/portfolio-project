import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import NavBar from '../Components/NavBar'

const setup =(props={})=>{
  const component = shallow(<NavBar {...props}/>)
  return component
}

describe('testing the NavBar component',()=>{
  it('should test the snapshot',()=>{
    const tree = renderer.create(<NavBar/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render everything properly',()=>{
    const wrapper = setup()
    expect(wrapper.find('[data-testid="link"]').length).toBe(3)
    expect(wrapper.find('[data-testid="search"]').length).toBe(1)
  })

  it('should handle the click event',()=>{
    const setShow = jest.fn(()=>{})
    const wrapper = shallow(<NavBar setShow={setShow}/>)
    let button = wrapper.find('[data-testid="search"]')
    button.simulate('click')
    expect(setShow.mock.calls.length).toBe(1)

  })
})
