import React from 'react';


import renderer from 'react-test-renderer';
import { shallow } from 'enzyme'

import Demo from '../Components/Demo';


describe('testing the demo component',()=>{

  it('should test the snapshot',()=>{
    const wrapper = shallow(<Demo />)
    expect(wrapper.find('[data-testid="container"]').length).toBe(1)
  })
})
