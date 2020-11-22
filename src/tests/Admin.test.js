import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import AdminLogin from '../Components/AdminLogin'


//1)snapshot testing
//2) testing the props(default and custom)
//3) testing the data types
//4)data type prop testing.

describe('testin the admin login',()=>{
  it('should render properly',()=>{
    const tree = renderer.create(<AdminLogin />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
