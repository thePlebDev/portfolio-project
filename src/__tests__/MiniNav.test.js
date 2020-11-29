import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom'

import MiniNav from '../Components/MiniNav'

const setup = (props={})=>{
  const component = shallow(<MiniNav {...props} />)
  return component
}


describe('testing the MiniNav component',()=>{
  it('should test the snapshot',()=>{
    const tree = renderer.create(<Router><MiniNav /></Router>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render normaly',()=>{
    const wrapper = setup(<MiniNav/>)
    expect(wrapper.find('[data-testid="home"]').length).toBe(1)
    expect(wrapper.find('[data-testid="blog"]').length).toBe(1)


  })
})
