import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import AdminLogin from '../Components/AdminLogin'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


//1) (DONE) snapshot testing
//2)(DOESNT TAKE ANY PROPS) testing the props(default and custom).
//3) testing the data types
//4)data type prop testing.
//5)testing conditions
//6) checks state after calling event.

describe('testin the admin login',()=>{
  it('should test the snapshot properly',()=>{
    const tree = renderer.create(<AdminLogin />).toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('should test that everything renders',()=>{
    const wrapper = shallow(<AdminLogin/>)
    let container = wrapper.find('[data-testid="container"]')
    let input = wrapper.find('[data-testid="input"]')
    expect(input.length).toBe(2)
    expect(container.length).toBe(1)
  })

})
