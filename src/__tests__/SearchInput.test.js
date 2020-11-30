import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import SearchInput from '../Components/SearchInput'



describe('testing SearchInput component',()=>{

  it('just testing stuff',()=>{
    const tree = renderer.create(<SearchInput/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render the important stuff',()=>{
    const wrapper = shallow(<SearchInput/>)
    expect(wrapper.find('[data-testid="input"]').length).toBe(1)
    expect(wrapper.find('[data-testid="close"]').length).toBe(1)
  })
  it('should render the custom props',()=>{
    let state='state'
    const handleChange= jest.fn(()=>{})
    const setShow= jest.fn(()=>{})

    const wrapper = shallow(<SearchInput state={state} handleChange={handleChange} setShow={setShow}/>)
    expect(wrapper.find('[data-testid="input"]').props().value).toBe(state)

    wrapper.find('[data-testid="input"]').simulate('change',{ target:{name: 'search',value:'two pretty best friends'} })
    expect(handleChange.mock.calls.length).toBe(1)

    wrapper.find('[data-testid="close"]').simulate('click')
    expect(setShow.mock.calls.length).toBe(1)
  })
})
