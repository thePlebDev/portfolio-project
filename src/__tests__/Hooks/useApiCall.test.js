import {renderHook, act} from '@testing-library/react-hooks';

import useApiCall from '../../Hooks/useApiCall';

describe('we are testing the useApiCall Hook', ()=>{
  it('should test the axios call, promise resolved', async()=>{
    const mockAxiosCall = jest.fn(()=>{
      return new Promise((resolve,reject)=>{
        resolve({data:'it do be like that sometimes'})
      })
    })

    const {result,waitForNextUpdate} = renderHook(()=>useApiCall(mockAxiosCall))

    await waitForNextUpdate()
    expect(result.current.state).toBe('it do be like that sometimes')



  })
})
