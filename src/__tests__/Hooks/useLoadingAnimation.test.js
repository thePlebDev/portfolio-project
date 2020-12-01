import { renderHook,act } from '@testing-library/react-hooks';

import useLoadingAnimation from '../../Hooks/useLoadingAnimation'


describe('we are testing the useLoadingAnimation hook',()=>{
  it('should just test the state', async()=>{
    const { result,waitForNextUpdate } = renderHook(()=>useLoadingAnimation())

    act( async ()=>{
      await waitForNextUpdate()
    })

    expect(result.current.show).toBe(true)
  })
})
