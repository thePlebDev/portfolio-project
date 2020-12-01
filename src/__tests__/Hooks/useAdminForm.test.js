import { renderHook,act } from  '@testing-library/react-hooks'

import useAdminForm from '../../Hooks/useAdminForm'


describe('testing the useAdminForm hook',()=>{
  it('should test handleChange',()=>{
    const {result} = renderHook(()=>useAdminForm())
    const value ="two pretty best friends"
    act(()=>{
      result.current.handleChange({target:{value,name:'username'}})
    //  result.current.handleChange({target:{value,name:'password'}})
    })

    act(()=>{
      result.current.handleChange({target:{value,name:'password'}})
    })
    expect(result.current.state.username).toBe(value)
    expect(result.current.state.password).toBe(value)
  })

  it('should test the onSubmit, resolved promise', async()=>{
    const mockValidation = jest.fn(()=>{return {}})

    const mockAxiosCall = jest.fn(()=>{
      return new Promise((resolve,reject)=>{
        resolve({data:{status:200}})
      })
    })

    const {result,waitForNextUpdate} = renderHook(()=>useAdminForm(mockValidation,mockAxiosCall))

     act(()=>{
      result.current.handleSubmit({preventDefault(){}})
    })

    await waitForNextUpdate()

    expect(mockValidation.mock.calls.length).toBe(1)
    expect(mockAxiosCall.mock.calls.length).toBe(1)
    expect(result.current.redirect).toBe(true)
  })

  it('should test the onSubmit, with error validation', async()=>{
    const mockValidation = jest.fn(()=>{
      return{error:'I aint never seen two pretty best friends'}
    })
    const mockAxiosCall = jest.fn(()=>{
      return new Promise((resolve,reject)=>{
        reject()
      })
    })
    const {result} = renderHook(()=>useAdminForm(mockValidation,mockAxiosCall))

    act(()=>{
      result.current.handleSubmit({preventDefault(){}})
    })
    expect(result.current.errors.error).toBe('I aint never seen two pretty best friends')
  })

  it('should test the onSubmit, promise rejected', async ()=>{
    const mockValidation = jest.fn(()=>{return{}})
    const mockAxiosCall = jest.fn(()=>{
      return new Promise((resolve,reject)=>{
        reject()
      })
    })

    const {result,waitForNextUpdate} = renderHook(()=>useAdminForm(mockValidation,mockAxiosCall))

    act(()=>{
      result.current.handleSubmit({preventDefault(){}})
    })

    await waitForNextUpdate()

    expect(result.current.errors.username).toBe('incorrect')
    expect(result.current.errors.password).toBe('incorrect')
  })

})
