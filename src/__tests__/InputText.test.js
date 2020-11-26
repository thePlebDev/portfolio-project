import React from 'react';

import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import InputText from '../Components/InputText'


describe('testing the InputText component',()=>{
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<InputText/>)
  })

  it('should render a proper snapshot',()=>{
    const tree = renderer.create(<InputText />).toJSON()
    expect(tree).toMatchSnapshot()

  })
  it('should render everything properly',()=>{
    expect(wrapper.find('[data-testid="input"]').length).toBe(1)
    expect(wrapper.find('[data-testid="input"]').length).toBe(1)
  })
  it('should test the default props',()=>{
    const defaultError ='enter error prop';
    const defualtName ='enter name prop';
    const defaultValue = 'enter value prop'
    const input = wrapper.find('[data-testid="input"]')
    const label = wrapper.find('[data-testid="label"]')

    expect(input.props().name).toBe(defualtName)
    expect(input.props().value).toBe(defaultValue)
    expect(input.props().error).toBe(defaultError)

    expect(label.props().state).toBe(false)
    expect(label.props().error).toBe(defaultError)
    expect(label.props().for).toBe(defualtName)
  })

  it('should test the actions',()=>{
    const me = shallow(<InputText/>)
    const input = me.find('[data-testid="input"]')
    const label = me.find('[data-testid="label"]')
    input.simulate('click',{target:{value:'another'}})
    console.log(label.props().state)
  })

})
