import { renderHook,act } from '@testing-library/react-hooks';

import useContactForm from '../../Hooks/useContactForm';



describe('testing the useContactForm hook',()=>{

  it('should test the handleChange',()=>{

    const { result } = renderHook(()=>useContactForm())

    act(()=>{
      result.current.handleChange({target:{value:'it de be like that sometimes',name:'name'}})
    })
    act(()=>{
      result.current.handleChange({target:{value:'it do go down',name:'subject'}})
    })
    act(()=>{
      result.current.handleChange({target:{value:'it is what it is',name:'email'}})
    })

    expect(result.current.state.name).toBe('it de be like that sometimes')
    expect(result.current.state.email).toBe('it is what it is')
    expect(result.current.state.subject).toBe('it do go down')

  })
})
