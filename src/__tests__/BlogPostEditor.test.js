import React from 'react';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import BlogPostEditor from '../Components/BlogPostEditor';

//1) get a snapshot
//2) test the props
//3) make sure the major parts render
//4)test the actions

describe('testing the BlogPostEditor Component',()=>{
  const useMockFunc = jest.fn(()=>{
    return{
      state:'state',
      errors:'errors',
      handleChange:function(){},
      handleSubmit:function(){}
    }
  })
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<BlogPostEditor useApiCal={useMockFunc}/>)
  })
  it('should test the snapshot',()=>{
    const tree = renderer.create(<BlogPostEditor />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should make sure that everything renders properly',()=>{
    expect(wrapper.find('[data-testid="container"]').length).toBe(1)
    expect(wrapper.find('[data-testid="input"]').length).toBe(5)
    expect(wrapper.find('[data-testid="button"]').length).toBe(1)
  })
  it('should use the mock function 3 times',()=>{
    expect(useMockFunc.mock.calls.length).toBe(3)
  })
})
