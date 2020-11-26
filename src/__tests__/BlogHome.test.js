import React from 'react'

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import BlogHome from '../Components/BlogHome'

//1) test the snapshot
//2) test the props
//3) test the events


describe('Testing the BlogHome component',()=>{
  let wrapper;
  const mockApiHook = jest.fn(()=>{
    let state ={
      posts:[{name:'it do be like that sometimes'},
      {name:'it do be like that sometimes'},{name:'it do be like that sometimes'},
      {name:'it do be like that sometimes'},
      {name:'it do be like that sometimes'},{name:'it do be like that sometimes'}]
    }
    let setState = ()=>{}
      return{
        state,
        setState
    }
  })
  beforeEach(()=>{
    wrapper = shallow(<BlogHome apiHook={mockApiHook} state={'another one'}/>)
  })
  it('should test the snapshot',()=>{
    const tree = renderer.create(<BlogHome />).toJSON
    expect(tree).toMatchSnapshot();
  })
  it('should render all the parts properly',()=>{
    let me = shallow(<BlogHome apiHook={mockApiHook} state={'another one'}/>)
    // the function is being called 3 times, why?
    expect(mockApiHook.mock.calls.length).toBe(3)


  })
})
