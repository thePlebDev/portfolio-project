import React from 'react';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Form from '../Components/Form'



describe('testing the Form component',()=>{
  it('should test the snapshot',()=>{
    const tree = renderer.create(<Form/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should test everything is rendered properly',()=>{
    const wrapper = shallow(<Form/>)
    expect(wrapper.find('[data-testid="container"]').length).toBe(1)
  })
  it('should test the submit function',()=>{
    const mockSubmitFunc = jest.fn(()=>{})
    const wrapper = shallow(<Form onSubmit={mockSubmitFunc}/>)
    const form = wrapper.find('[data-testid="container"]')
    form.simulate('submit')
    expect(mockSubmitFunc.mock.calls.length).toBe(1)
  })
})
