import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom'

import SearchArticles from '../Components/SearchArticles'



//1) take a snapshot
//2) check that important stuff renders
//3) check default props
//4) check custom props
//5) check actions

const findByAttr =(component,dataTestId)=>{
  const data = component.find(`[data-testid='${dataTestId}']`)
  return data
}

describe('testing the SearchArticles component',()=>{

  it('should test the snapshot',()=>{
    const tree = renderer.create(<Router><SearchArticles/></Router>).toJSON();
    expect(tree).toMatchSnapshot()
  })

  it('should render the important stuff',()=>{
    const wrapper = shallow(<SearchArticles/>)
    expect(findByAttr(wrapper,'title').length).toBe(1)
    expect(findByAttr(wrapper,'description').length).toBe(1)
  })

  it('should render the default props',()=>{
    const wrapper = shallow(<SearchArticles/>)
    expect(findByAttr(wrapper,'title').props().children).toBe('Enter a title prop')
    expect(findByAttr(wrapper,'description').props().children).toBe('Enter a description prop')
  })

  it('should render the custom props ',()=>{
    const wrapper = shallow(<SearchArticles title={'title'} description={'description'}/>)
    expect(findByAttr(wrapper,'title').props().children).toBe('title')
    expect(findByAttr(wrapper,'description').props().children).toBe('description')

  })
})
