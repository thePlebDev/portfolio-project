import React from 'react';

import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';

import Filters from '../Components/Filters'


describe('testing the Filter Component',()=>{
  let wrapper;
  let useMockFunc = jest.fn(()=>{
    return{
      handleClick:jest.fn(()=>{})
    }
  })

  beforeEach(()=>{
    wrapper = shallow(<Filters filters={'it do be like that'} useApiCall={useMockFunc}/>)
  })
  it('should test the snapshot',()=>{
    const tree = renderer.create(<Filters/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should make sure that everything renders properly',()=>{
    expect(wrapper.find('[data-testid="container"]').length).toBe(1)
    expect(wrapper.find('[data-testid="text"]').length).toBe(1)
    expect(wrapper.find('[data-testid="text"]').props().children).toBe('it do be like that')
  })
  it('should test the mock function',()=>{
    expect(useMockFunc.mock.calls.length).toBe(3)
  })
})
