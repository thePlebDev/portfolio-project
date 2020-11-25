import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import App from '../Components/App'



describe('testing the App component',()=>{
  it('should test the snapshot',()=>{
    const tree = renderer.create(<App/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
