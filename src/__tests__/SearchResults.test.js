import React from 'react'

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import SearchResults from '../Components/SearchResults';




describe('testing the SearchResults component',()=>{
  it('should render the snapshot',()=>{
    const tree = renderer.create(<SearchResults />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render the important stuff with default props',()=>{
    const wrapper = shallow(<SearchResults />)
    expect(wrapper.find('[data-testid="searchResultsFalse"]').length).toBe(1)
    expect(wrapper.find('[data-testid="searchResultsTrue"]').length).toBe(0)
  })
  it('should render the important stuff with custom props',()=>{
    const searchResults =[{name:'another one',_id:3}]
    const wrapper = shallow(<SearchResults searchResults={searchResults}  />)
    expect(wrapper.find('[data-testid="searchResultsTrue"]').length).toBe(1)
    expect(wrapper.find('[data-testid="searchResultsFalse"]').length).toBe(0)
  })
})
