import React from 'react';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import InputTextArea from '../Components/InputTextArea'

//1)snapshots
//2)renders
//3)props
//4)actions


describe('testing the InputTextArea component',()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper = shallow(<InputTextArea/>)
  })
  it('should render the snapshot',()=>{
    const tree = renderer.create(<InputTextArea />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should render correctly',()=>{
    const input = wrapper.find('[data-testid="label"]')
    const textArea = wrapper.find('[data-testid="textarea"]')
    expect(input.length).toBe(1)
    expect(textArea.length).toBe(1)
  })
  it('should render the proper defualt props',()=>{
    const defaultName ="enter name prop"
    const defaultValue ='enter value prop'
    const defaultError = 'enter error prop'
    const input = wrapper.find('[data-testid="label"]')
    const textArea = wrapper.find('[data-testid="textarea"]')

    expect(input.props().for).toBe(defaultName)

    expect(textArea.props().name).toBe(defaultName)
    expect(textArea.props().value).toBe(defaultValue)
    expect(textArea.props().error).toBe(defaultError)
    expect(typeof textArea.props().onChange).toBe('function')

  })
  describe('testing the custom prop component',()=>{
    let wrapper;
    let mockOnChange = jest.fn(()=>{})
    beforeEach(()=>{
      wrapper = shallow(<InputTextArea name={'it'} value={'go'} error={'down'} onChange={mockOnChange}/>)
    })
    it('should be a component',()=>{
      const label = wrapper.find('[data-testid="label"]')
      const textarea = wrapper.find('[data-testid="textarea"]')

      expect(textarea.props().name).toBe('it')
      expect(textarea.props().value).toBe('go')
      expect(textarea.props().error).toBe('down')

      expect(label.props().for).toBe('it')

      textarea.simulate('change',{target:{value:'it do be like that sometimes'}})
      expect(mockOnChange.mock.calls.length).toBe(1)
    })
  })
})
