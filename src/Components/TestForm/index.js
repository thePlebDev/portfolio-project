import React from 'react';

import useTestingHook from '../../Hooks/useTestHook'
import testUtilFuncs from '../../utils/testUtilFuncs'
import TestingForm from '../TestingForm'
import TestingInput from '../TestInput'

const TestForm =({useCustomHook = useTestingHook})=>{

  const {handleSubmit,handleChange,state} = useCustomHook(testUtilFuncs.validation)

  return(
    <TestingForm handleSubmit={handleSubmit}>
      <TestingInput name={'name'} state={state.name} handleChange={handleChange} />
      <TestingInput name={'email'} state={state.email} handleChange={handleChange} />

      <button>Submit</button>
    </TestingForm>
  )
}


export default TestForm
