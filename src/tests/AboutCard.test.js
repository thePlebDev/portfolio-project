import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme'

import AboutCard from '../Components/AboutCard'
//1)create the snapshot
//2)testing props
//3)testing the types of props
//testing events
 
describe('testing the AboutCard',()=>{
  it('should render the snapshot correctly',()=>{
    const tree = renderer.create(<AboutCard />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
