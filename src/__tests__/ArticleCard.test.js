import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import ArticleCard from '../Components/ArticleCard'
import {BrowserRouter as Router} from 'react-router-dom'

//1) check the snapshot
//2) check that it renders properly
//3) check the default props
//4) check the custom props
//5) check the events


describe('Testing the ArticleCard component',()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<ArticleCard />)
  })
  it('should create the snapshot',()=>{
    const tree = renderer.create(<Router><ArticleCard/></Router>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render all the important stuff',()=>{

    expect(wrapper.find('[data-testid="image"]').length).toBe(1)
    expect(wrapper.find('[data-testid="title"]').length).toBe(1)
    expect(wrapper.find('[data-testid="description"]').length).toBe(1)
    expect(wrapper.find('[data-testid="read-more"]').length).toBe(1)
  })
  it('should render the default prop values',()=>{
    const defaultImage="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1713&q=80"
    const defaultDescription="Click read more to view the whole article"
    const defaultTitle="This post deals with JavaScript"
    
    expect(wrapper.find('[data-testid="image"]').props().src).toBe(defaultImage)
    expect(wrapper.find('[data-testid="title"]').props().children).toBe(defaultTitle)
    expect(wrapper.find('[data-testid="description"]').props().children).toBe(defaultDescription)

  })
})
