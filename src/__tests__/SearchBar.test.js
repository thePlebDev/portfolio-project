import React from 'react';

import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import SearchBar from '../Components/SearchBar';

const findByAttr =(component,dataTestId)=>{
  const data = component.find(`[data-testid='${dataTestId}']`)
  return data
}


describe('testing the SearchBar component',()=>{
  it('should test the snapshot',()=>{
    const tree = renderer.create(<SearchBar/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render the important stuff with the default props',()=>{
    const wrapper = shallow(<SearchBar/>)
    //showFalse
    expect(findByAttr(wrapper,'showFalse').length).toBe(1)
  })
  it('should render the important stuff with the custom props',()=>{
    const show = true;
    const wrapper = shallow(<SearchBar show={show}/>)
    expect(findByAttr(wrapper,'showTrue').length).toBe(1)
  })
})
