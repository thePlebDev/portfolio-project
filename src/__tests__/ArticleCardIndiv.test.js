import React from 'react'

import renderer from 'react-test-renderer'
import shallow from 'enzyme'

import ArticleCardIndiv from '../Components/ArticleCardIndiv'


describe('testing the ArticleCardIndiv component',()=>{
  it('should test the snapshot',()=>{
    const tree = renderer.create(<ArticleCardIndiv/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
